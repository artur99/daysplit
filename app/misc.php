<?php
use Silex\Application;

class misc{
    function __construct(Application $app){
        //nothing here :D
    }
    public function filter($data){
        if(isset($data['email'])){
            $data['email'] = substr($data['email'], 0, 100);
        }
        if(isset($data['password'])){
            $data['password'] = substr($data['password'], 0, 100);
        }
        if(isset($data['title'])){
            $data['title'] = substr($data['title'], 0, 100);
        }
        if(isset($data['color'])){
            $colors = explode(',', 'blue,red,purple,yellow,green,indigo,orange,pink,teal,amber');
            if(!in_array($data['color'], $colors))$data['color'] = 'blue';
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
    public function render_date($date, $lang='ro'){
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
            if(isset($elems[0])) $elems[0] = (int) ($elems[0]);
            if(isset($elems[1])) $elems[1] = (int) ((ctype_alpha($elems[1]) && isset($mths[$elems[1]]))?$mths[$elems[1]]:$elems[1]);
            if(isset($elems[2])) $elems[2] = (int) ($elems[2]);
            if(!isset($elems[0]) || !$elems[0] || $elems[0]>31) $elems[0] = (int)date('d');
            if(!isset($elems[1]) || !$elems[1] || $elems[1]>12) $elems[1] = (int)date('m');
            if(!isset($elems[2]) || !$elems[2]) $elems[2] = (int)date('Y');
            return $elems;
        endif;
    }
    public function render_time($time, $lang = 'ro'){
        if($lang == 'ro'):
            if(strlen($time) == 4)
                $time = substr($time, 0, 2).":".substr($time, 2, 2);
            elseif(strlen($time) == 6)
                $time = substr($time, 0, 2).":".substr($time, 2, 2).":".substr($time, 4, 2);

            $elems = preg_split( "/(\s+|\.|-|,|:|;|\|)/", $time);
            $elems = array_filter($elems, function($el){
                return abs(intval(strlen(trim($el))));
            });
            array_walk($elems, function(&$val){
                $val = trim($val);
            });
            if(!isset($elems[0]))$elems[0] = 0;
            else $elems[0] = (int)$elems[0];
            if(!isset($elems[1]))$elems[1] = 0;
            else $elems[1] = (int)$elems[1];

            if($elems[0]>=24)$elems[0]=23;
            if($elems[1]>59)$elems[1]=59;

            return $elems;
        endif;
    }
    public function gentime($data, $type){
        $str = 0;
        if($type=='date'){
            $str = str_pad($data[2],4,"0",STR_PAD_LEFT);
            $str.= str_pad($data[1],2,"0",STR_PAD_LEFT);
            $str.= str_pad($data[0],2,"0",STR_PAD_LEFT);
        }elseif($type=='time'){
            $str = str_pad($data[0],2,"0",STR_PAD_LEFT);
            $str.= str_pad($data[1],2,"0",STR_PAD_LEFT);
        }

        return $str;
    }
    public function unix2date($unix){
        $y = date("Y", $unix);
        $m = date("m", $unix);
        $d = date("d", $unix);
        return $this->gentime([$d, $m, $y], 'date');
    }
}
