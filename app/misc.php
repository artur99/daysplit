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
    public function renderdate($date, $lang='ro'){
        if($lang=='ro'):
            $elems = preg_split( "/(\s+|\.|-|,|:|;|\|)/", $date);
            $elems = array_filter($elems, function($el){
                return strlen(trim($el));
            });
            array_walk($elems, function(&$val){
                $val = trim($val);
                if(ctype_alpha($val)) $val = strtolower(substr($val, 0, 3));
            });
            $mths = [
                'ian'=>1,
                'feb'=>2,
                'mar'=>3,
                'apr'=>4,
                'mai'=>5,
                'iun'=>6,
                'iul'=>7,
                'aug'=>8,
                'sep'=>9,
                'oct'=>10,
                'noi'=>11,
                'dec'=>12,
            ];
            $elems[0] = (int) ($elems[0]);
            if(isset($elems[1])) $elems[1] = (int) ((ctype_alpha($elems[1]) && isset($mths[$elems[1]]))?$mths[$elems[1]]:$elems[1]);
            if(isset($elems[2])) $elems[2] = (int) ($elems[2]);
            if(!$elems[0])$elems[0] = (int)date('d');
            if(!isset($elems[1]) || !$elems[1])$elems[1] = (int)date('m');
            if(!isset($elems[2]) || !$elems[2])$elems[2] = (int)date('Y');
        endif;
    }
}


$misc = new misc($app);


// $misc->renderdate('8 martie');
// die();
