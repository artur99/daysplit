<?php

class misc{
    function __construct($app){
        //nothing here :D
    }
    public function filter($data){
        if(isset($data['email'])){
            $data['email'] = substr($data['email'], 0, 100);
        }
        if(isset($data['password'])){
            $data['password'] = substr($data['password'], 0, 100);
        }
        return $data;
    }
    public function validate($data, $type){
        if(!isset($data[$type]))return 0;
        if($type=='email'){
            if(strlen($data[$type])<6 || !filter_var($data[$type], FILTER_VALIDATE_EMAIL)) return 0;
        }elseif($type=='password'){
            if(strlen($data['password'])<6) return 0;
        }
        return 1;
    }
    public function encode($data){
        return md5($data);
    }
}


$misc = new misc($app);
