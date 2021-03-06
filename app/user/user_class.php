<?php
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Silex\Application;

class user{
    function __construct(Application $app){
        $this->session = $app['session'];
        $this->db = $app['db'];
        $this->misc = $app['misc'];
        $this->mailcls = $app['mailcls'];
        // var_dump($app['request_stack']);
        $this->executer = $app['executers']['user'];
    }
    public function loggedin(){
        return $this->session->has('user')?$this->session->get('user')['id']:false;
    }
    public function loggedin_cookie(Request $request = null){
        $cookies = $request->cookies;
        if(!$cookies->has('token')) return false;
        $q = $this->db->executeQuery("SELECT id FROM users WHERE token = ? LIMIT 1", [(string)$cookies->get('token')]);
        $dt = $q->fetch();
        if(!sizeof($dt))return false;
        if(isset($dt['id'])) return $dt['id'];
        return false;
    }
    public function cookie_login(JsonResponse &$resp = null, Request $request = null){
        $cookies = $request->cookies;
        if(!$cookies->has('token')) return false;
        $q = $this->db->executeQuery("SELECT id FROM users WHERE token = ? LIMIT 1", [(string)$cookies->get('token')])->fetch();
        if(!isset($q['id'])) return false;
        return $this->login_mode1($q['id'], 1, $resp);
    }
    public function check_auth($em, $pw){
        if(!$this->misc->validate(['email'=>$em],'email')) return 0;
        $pw = $this->misc->encode($pw);
        $q = $this->db->executeQuery("SELECT id FROM users WHERE type = 1 AND email = ? AND password = ? LIMIT 1", [$em, $pw]);
        return $q->fetchAll();
    }
    public function login_validate($data){
        if(!isset($data['email'], $data['password'])) return 0;
        $data = $this->misc->filter($data);
        $kau = $this->check_auth($data['email'], $data['password']);
        if(isset($kau[0], $kau[0]['id'])) $res = ['id'=>$kau[0]['id']];
        else $res['err']=['password' => 'Date de logare invalide'];
        return $res;
    }
    public function login_mode1($uid, $keepin = 0, JsonResponse &$resp = null){
        $this->db->executeQuery("UPDATE users SET ldate = UNIX_TIMESTAMP(NOW()) WHERE id = ? LIMIT 1", [(int)$uid]);
        $uq = $this->db->executeQuery("SELECT type,name,email,image,description,fbid FROM users WHERE id = ? LIMIT 1", [(int)$uid]);
        $udata = $uq->fetch();
        $udata['id'] = $uid;
        $this->session->set('user', $udata);
        if($keepin){
            $token = $this->misc->generate_token();
            $this->db->executeQuery("UPDATE users SET token = ? WHERE id = ? LIMIT 1", [$token, (int)$uid]);
            if($resp)$resp->headers->setCookie(new Cookie('token', $token, time()+604800));
        }
        return 1;
    }
    public function signup_mode1($data){
        $data = $this->misc->filter($data);
        $em = $data['email'];
        $pw = $this->misc->encode($data['password']);
        $this->db->executeQuery("INSERT INTO users (id, type, email, fbid, password, sdate, ldate) VALUES (NULL, 1, ?, '', ?, UNIX_TIMESTAMP(NOW()), UNIX_TIMESTAMP(NOW()))", [$em, $pw]);
        $lid = $this->db->lastInsertId();
        $this->login_mode1($lid, 0);
        $this->mailcls->send_signup($data['email']);
        return ['text'=>'Ați fost înregistrat cu succes.'];
    }
    public function signup_mode2($data){
        $data = $this->misc->filter($data);
        $em = $data['email'];
        $fbid = $data['id'];
        $this->db->executeQuery("INSERT INTO users (id, type, email, fbid, name, sdate, ldate) VALUES (NULL, 1, ?, ?, ?, UNIX_TIMESTAMP(NOW()), UNIX_TIMESTAMP(NOW()))", [$em, $fbid, (string)$data['name']]);
        $lid = $this->db->lastInsertId();
        $this->login_mode1($lid, 0);
        if(!empty($data['email'])) $this->mailcls->send_signup($data['email']);
        return 1;
    }
    public function signup_validate($data){
        if(!$this->misc->validate($data,'email'))$err['email'] = 'Adresa de email este invalidă';
        elseif($this->mail_exists($data['email'])) $err['email'] = 'Adresa de email este folosită';
        if(!$this->misc->validate($data,'password'))$err['password'] = 'Parola este prea scurtă';
        elseif($data['password']!=$data['cpassword'])$err['cpassword'] = 'Parolele nu corespund';
        return isset($err)?$err:[];
    }
    public function mail_exists($em){
        $em = $this->misc->filter(['email'=>$em]);
        if(!$em)return 0;
        $em = $em['email'];
        $q = $this->db->executeQuery('SELECT COUNT(1) FROM users WHERE email = ? LIMIT 1', [$em]);
        return $q->fetch()['COUNT(1)'];
    }
    public function fbid_exists($fbid){
        $fbid = $this->misc->filter(['fbid'=>$fbid]);
        if(!$fbid)return 0;
        $fbid = (string)$fbid['fbid'];
        $q = $this->db->executeQuery('SELECT COUNT(1) FROM users WHERE fbid = ? LIMIT 1', [$fbid]);
        return $q->fetch()['COUNT(1)'];
    }
    public function fb_realauth($tok, &$resp){
        global $fb;
        $this->session->set('fb_access_token', $tok);
        $data = $fb->get("/me?fields=id,name,email", $tok)->getDecodedBody();
        if(empty($data['id'])) throw new AccessDeniedHttpException("Accesul la ID-ul de facebook nu a fost acceptat!");

        if($this->fbid_exists($data['id'])){
            $uid = $this->db->executeQuery("SELECT id FROM users WHERE email = ?", [(string)$data['email']])->fetch()['id'];
            $this->login_mode1($uid, 1, $resp);
            return 1;
        }else{
            if(!isset($data['email'])) $data['email'] = '';
            $this->signup_mode2($data);
            return 1;
        }
    }
    public function fbauth(&$resp){
        global $fb;
        if($this->loggedin()){
            // $this->getuserdata();
            return 1;
        }
        $session = $this->session->has('fb_access_token')?$this->session->get('fb_access_token'):0;
        $helper = $fb->getRedirectLoginHelper();
        $user=0;
        if($session){
            try{
                if($fb->get('/me?fields=id,name,email',$session)) $user=1;
            }catch(FacebookApiException $e){

            }
        }if(!$user){
            // var_dump($helper);die();
            $session = $helper->getAccessToken();
            if($session){
                //The user just came from facebook API
                $user=1;
            }
        }
        if($user){
            $this->fb_realauth($session, $resp);
            return 1;
        }
        return $helper->getLoginUrl(g_link('/fblogin')).'&scope=email';
    }
    public function get($uid, $data){
        $q = $this->db->executeQuery("SELECT ".$data." FROM users WHERE id = ?", [(int)$uid]);
        $dt = $q->fetch();
        if(!sizeof($dt)) return false;
        return $dt;
    }
    public function getc($data){
        if(!$this->session->has('user')) return false;
        $user = $this->session->get('user');
        if(!isset($user[$data]))return false;
        return $user[$data];
    }
    public function checkpassword($psw){
        $uid = (int)$this->getc('id');
        $psw = (string)$this->misc->encode($psw);
        return $this->db->executeQuery("SELECT COUNT(1) AS c FROM users WHERE id = ? AND password = ? LIMIT 1", [$uid, $psw])->fetch()['c'];
    }
    public function reset_password($data){
        $em = $this->misc->filter(['email'=>isset($data['email'])?$data['email']:'']);
        $txtarr = ['text'=>'Dacă adresa este înregistrată, veți primi un link de resetare'];
        if(!$em)return $txtarr;
        $em = $em['email'];
        $q = $this->db->executeQuery('SELECT COUNT(1) FROM users WHERE email = ? LIMIT 1', [$em]);
        if($q->fetch()['COUNT(1)']){
            $resettok = 'reset_'.time().'_'.$this->misc->generate_token();
            $this->db->executeQuery("UPDATE users SET token = '$resettok' WHERE email = ? LIMIT 1", [$em]);
            $resetlink = g_link('/account/reset?key='.$resettok);
            $this->mailcls->send_reset($em, ['reset_link'=>$resetlink]);
        }
        return $txtarr;
    }
    public function reset_password_change($data){
        $err = 0;
        if(!isset($data['password'], $data['cpassword'], $data['reset_token'])){
            $err = 1;
            $err_text = 'Ceva nu a funcționat, te rugăm să reîncarci pagina.';
        }elseif(!$this->check_resetcode($data['reset_token'])){
            $err = 1;
            $err_text = 'Codul de resetare este invalid sau a expirat.';
        }elseif(!$this->misc->validate($data, 'password')){
            $err = 1;
            $err_text = ['password'=>'Parola introdusă este prea scurtă sau invalidă.'];
        }elseif(!$this->misc->validate($data, 'cpassword')){
            $err = 1;
            $err_text = ['cpassword'=>'Parolele nu corespund.'];
        }
        if($err) return ['type'=>'error', 'text'=>$err_text];

        $pw = $this->misc->encode($data['password']);
        $token = $data['reset_token'];

        $this->db->executeQuery("UPDATE users SET token = '', password = ? WHERE token = ? LIMIT 1", [$pw,$token]);
        return ['type'=>'success', 'text'=>'Parola a fost schimbată cu succes.'];

    }
    public function check_resetcode($keyc){
        $key = explode('_', $keyc);
        if(!$key) return false;
        elseif(!isset($key[0]) || $key[0] != 'reset') return false;
        elseif(!isset($key[1]) || (time() - (int)$key[1]) > 86400) return false;
        $key = (string)$keyc;
        $q = $this->db->executeQuery('SELECT COUNT(1) FROM users WHERE token = ? LIMIT 1', [$key]);
        return $q->fetch()['COUNT(1)']?true:false;
    }
    public function direct_change($type, $data){
        $uid = (int)$this->getc('id');
        if($type == 'emnm'){
            $em = (string)$data['email'];
            $nm = (string)$data['name'];
            $this->db->executeQuery("UPDATE users SET email = ?, name = ? WHERE id = ? LIMIT 1", [$em, $nm, $uid]);
        }elseif($type=='password'){
            $psw = $this->misc->encode($data);
            $this->db->executeQuery("UPDATE users SET password = ? WHERE id = ? LIMIT 1", [$psw, $uid]);
        }
    }
    public function in_group($gid){
        $uid = (int)$this->getc('id');
        $gid = (int)$gid;
        $qr = $this->db->executeQuery("SELECT COUNT(1) FROM group_members WHERE user_id = ? AND group_id = ? LIMIT 1", [$uid, $gid])->fetch()['COUNT(1)'];
        return $qr?true:false;
    }
}
