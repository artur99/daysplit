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
    public function login($email, $pass){
        $pass = md5(substr($pass, 0, 100));
        $sql = "SELECT id,email,name,role FROM users WHERE email = ? AND pass = ?";
        $q = $this->db->fetchAssoc($sql, array((string) $email, (string)$pass));
        if(!$q) return false;
        $this->session->set('user', $q);
        return true;
    }
    public function data($what){
        $data = $this->session->get('user');
        if(isset($data[$what])) return $data[$what];
        else return false;
    }
}

$user = new user($app);