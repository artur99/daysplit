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
    function insert_event($name, $desc, $ed, $et=0, $sd, $st=0){
        global $user;
        if($et == 0){
            $et = "2200";
        }
        if($st == 0){
            $et = "0700";
        }
        $color = 'purple';
        $uid = (int)$user->getc('id');
        $this->db->executeQuery("INSERT INTO events (user_id, title, description, edate, etime) VALUES (?, ?, ?, ?, ?)", [$uid, (string)$name, (string)$desc, $ed, $et]);
        $eid = (int)$this->db->lastInsertId();
        $this->db->executeQuery("INSERT INTO periods (event_id, user_id, sdate, stime, edate, etime, color) VALUES (?, ?, ?, ?, ?, ?, ?)", [$eid, $uid, $sd, $st, $ed, $et, $color]);
        return true;
    }
    function add($d){
        if(!isset($d['type'])) return ['type'=>'error', 'text'=>'Tip invalid de date'];
        if($d['type']=='event'){
            $name = (isset($d['title']) && !empty($d['title']))?trim($d['title']):'Fără titlu';
            $sdate = $this->misc->render_date(isset($d['start_date'])?$d['start_date']:'');
            $edate = $this->misc->render_date(isset($d['end_date'])?$d['end_date']:'');
            $stime = $this->misc->render_time(isset($d['start_time'])?$d['start_time']:'');
            $etime = $this->misc->render_time(isset($d['end_time'])?$d['end_time']:'');

            $sd = (string)$this->misc->gentime($sdate, 'date');
            $st = (string)$this->misc->gentime($stime, 'time');

            $ed = (string)$this->misc->gentime($edate, 'date');
            $et = (string)$this->misc->gentime($etime, 'time');

            if(empty(trim($d['start_time']))) $st = 0;
            if(empty(trim($d['end_time']))) $et = 0;

            $desc = isset($d['desc'])&&!empty($d['desc']) ? trim($d['desc']) : '';
            if($this->insert_event($name, $desc, $ed, $et, $sd, $st)){
                return ['type'=>'success', 'msg'=>'Eveniment adăugat cu succes!'];
            }
        }

    }
    function get_3days($day){
        global $user;
        $sdate = (string)$this->misc->unix2date(time()+60*60*24*$day);
        $edate = (string)$this->misc->unix2date(time()+60*60*24*($day+2));
        $uid = (int)$user->getc('id');
        //edate - sdate
        $qr = $this->db->executeQuery("SELECT periods.*, events.title FROM periods INNER JOIN events ON periods.event_id=events.id WHERE periods.user_id = ? AND periods.sdate <= ? AND periods.edate >= ?", [$uid, $edate, $sdate])->fetchAll();

        return $qr;
    }

}

$model = new model($app, $misc);
