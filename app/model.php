<?php

class model{
    function __construct($app,$misc){
        $this->db = $app['db'];
        $this->misc = $misc;
    }
    function time(){
        $data = [];
        $data['unix'] = time();
        $data['time'] = [
            'day'   => date('d'),
            'month' => date('m'),
            'year'  => date('Y'),
            'hour'  => date('H'),
            'minute'=> date('i'),
            'second'=> date('s'),
        ];
        return $data;
    }
    function insert_event($name, $desc, $ed, $et=0){
        global $user;
        if($et == 0){
            $et = "2200";
        }
        $uid = (int)$user->getc('id');
        $this->db->executeQuery("INSERT INTO events (user_id, titlu, descriere, edate, etime) VALUES (?, ?, ?, ?, ?)", [$uid, (string)$name, (string)$desc, $ed, $et]);

    }
    function add($d){
        if(!isset($d['type'])) return ['type'=>'error', 'text'=>'Tip invalid de date'];
        if($d['type']=='event'){
            $name = (isset($d['title']) && !empty($d['title']))?$d['title']:'Fără titlu';
            $sdate = $this->misc->render_date(isset($d['start_date'])?$d['start_date']:'');
            $edate = $this->misc->render_date(isset($d['end_date'])?$d['end_date']:'');
            $stime = $this->misc->render_time(isset($d['start_time'])?$d['start_time']:'');
            $etime = $this->misc->render_time(isset($d['end_time'])?$d['end_time']:'');

            $ed = (string)$this->misc->gentime($edate, 'date');
            $et = (string)$this->misc->gentime($etime, 'time');

            if(!strlen($d['end_time']))

            $desc = isset($d['desc'])&&!empty($d['desc']) ? $d['desc'] : '';
            if(empty(trim($d['end_time']))) $et = 0;
            $this->insert_event($name, $desc, $ed, $et);
        }

    }

}

$model = new model($app, $misc);
