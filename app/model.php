<?php

class model{
    function __construct($app){
        $this->db = $app['db'];
    }
    public function validate($data){
        if(isset($data['email'])){
            if(!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) return 0;
            $data['email'] = substr($data['email'], 0, 100);
        }
        if(isset($data['password'])){
            $data['password'] = substr($data['password'], 0, 100);
        }
        return $data;
    }
    public function encode($data){
        return md5($data);
    }
}

$model = new model($app);
