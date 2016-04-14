<?php

class model{
    function __construct($app){
        $this->db = $app['db'];
    }
    function time(){
        $data = [];
        $data['unix'] = time();
        $data['time'] = [
            'day'=>date('d'),
            'month'=>date('m'),
            'year'=>date('Y'),
            'hour'=>date('H'),
            'minute'=>date('i'),
            'second'=>date('s'),
        ];
        return $data;
    }
    function add($d){
        if(!isset($d['type'])) return ['type'=>'error', 'text'=>'Tip invalid de date'];
        if($d['type']=='event'){

        }
    }

}

$model = new model($app);
