<?php
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Cookie;
class user{
    function __construct($app){
        $this->session = $app['session'];
        $this->db = $app['db'];
    }
    public function loggedin(){
        return $this->session->has('user')?$this->session->get('user')['id']:false;
    }
    public function loggedin_cookie(){
        global $app;
        $ck = $app['request']->cookies;
        if(!$ck->has('token')) return false;
        $q = $this->db->executeQuery("SELECT id FROM users WHERE token = ? LIMIT 1", [(string)$ck->get('token')]);
        $dt = $q->fetch();
        if(!sizeof($dt))return false;
        if(isset($dt['id'])) return $dt['id'];
        return false;
    }
    public function cookie_login(JsonResponse &$resp = null){
        global $app;
        $ck = $app['request']->cookies;
        if(!$ck->has('token')) return false;
        $q = $this->db->executeQuery("SELECT id FROM users WHERE token = ? LIMIT 1", [(string)$ck->get('token')])->fetch();
        if(!isset($q['id'])) return false;
        return $this->login_mode1($q['id'], 1, $resp);
    }
    public function check_auth($em, $pw){
        global $misc;
        if(!$misc->validate(['email'=>$em],'email')) return 0;
        $pw = $misc->encode($pw);
        $q = $this->db->executeQuery("SELECT id FROM users WHERE type = 1 AND email = ? AND password = ? LIMIT 1", [$em, $pw]);
        return $q->fetchAll();
    }
    public function login_validate($data){
        global $misc;
        if(!isset($data['email'], $data['password'])) return 0;
        $data = $misc->filter($data);
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
            $token = str_shuffle(str_shuffle("artur99artur99artur99net").implode(range('f','y')).time().microtime(true)).time();
            $this->db->executeQuery("UPDATE users SET token = ? WHERE id = ? LIMIT 1", [$token, (int)$uid]);
            if($resp)$resp->headers->setCookie(new Cookie('token', $token, time()+604800));
        }
        return 1;
    }
    public function signup_mode1($data){
        global $misc,$mailcls;
        $data = $misc->filter($data);
        $em = $data['email'];
        $pw = $misc->encode($data['password']);
        $this->db->executeQuery("INSERT INTO USERS (id, type, email, password, sdate, ldate) VALUES (NULL, 1, ?, ?, UNIX_TIMESTAMP(NOW()), UNIX_TIMESTAMP(NOW()))", [$em, $pw]);
        $lid = $this->db->lastInsertId();
        $this->login_mode1($lid, 0);
        $mailcls->send_signup($data['email']);
        return 1;
    }
    public function signup_validate($data){
        global $misc;
        if(!$misc->validate($data,'email'))$err['email'] = 'Adresa de email este invalidă';
        elseif($this->mail_exists($data['email'])) $err['email'] = 'Adresa de email este folosită';
        if(!$misc->validate($data,'password'))$err['password'] = 'Parola este prea scurtă';
        elseif($data['password']!=$data['cpassword'])$err['cpassword'] = 'Parolele nu corespund';
        return isset($err)?$err:[];
    }
    public function mail_exists($em){
        global $misc;
        $em = $misc->filter(['email'=>$em]);
        if(!$em)return 0;
        $em = $em['email'];
        $q = $this->db->executeQuery('SELECT COUNT(1) FROM users WHERE email = ? LIMIT 1', [$em]);
        return $q->fetch()['COUNT(1)'];
    }
    public function fbauth(){
        global $app;
        if($this->loggedin()){
            $this->getuserdata();
            return 1;
        }
        $app['fb'] = new Facebook\Facebook(array(
          'appId'  => getenv('FACEBOOK_APP_ID'),
          'secret' => getenv('FACEBOOK_APP_SECRET'),
        ));
        $session = $this->session->has('fb_access_token')?$this->session->get('fb_access_token'):0;
        $helper = $app['fb']->getRedirectLoginHelper();
        $user=0;
        if($session){
            try{
                if($app['fb']->get('/me',$session)) $user=1;
            }catch(FacebookApiException $e){}
        }if(!$user){
            $session = $helper->getAccessToken();
            if($session){
                //The user just came from facebook API
                $user=1;
            }
        }
        if($user){
            $this->realauth($session);
            return 1;
        }
        return $helper->getLoginUrl('http://thevoiceofyoungeurope.com/login');
    }
    public function get($uid, $data){
        $q = $this->db->executeQuery("SELECT ".$data." FROM users WHERE id = ?", [(int)$uid]);
        $dt = $q->fetch();
        if(!sizeof($dt)) return false;
        return $dt;
    }
}

$user = new user($app);
