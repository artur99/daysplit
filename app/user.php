<?php

class user{
    function __construct($app){
        $this->session = $app['session'];
        $this->db = $app['db'];
    }
    public function loggedin(){
        return $this->session->has('user')?true:false;
    }
    public function isadmin(){
        return $this->session->has('user')&&$this->session->get('user')['role']==2?true:false;
    }
    public function check_auth($em, $pw){
        global $model;
        $pw = $model->encode($pw);
        $q = $this->db->executeQuery("SELECT * FROM users WHERE type = 1 AND email = ? AND password = ? LIMIT 1", [$em, $pw]);
        $user = $q->fetch();

    }
    public function login_mode1($data){
        //Function called by ajax login
        //Simple plain login with email and password
        global $model;
        if(!isset($data['email'], $data['password'])) return 0;
        $data = $model->validate($data);
        $keepin = isset($data['keepin'])&&$data['keepin']?1:0;
        $valid = $this->check_auth($data['email'], $data['password']);

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
}

$user = new user($app);
