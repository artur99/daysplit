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
    function insert_event($name, $desc, $color, $ed, $et=0, $sd, $st=0){
        global $user;
        $uid = (int)$user->getc('id');
        $this->db->executeQuery("INSERT INTO events (user_id, title, description, edate, etime) VALUES (?, ?, ?, ?, ?)", [$uid, (string)$name, (string)$desc, $ed, $et]);
        $eid = (int)$this->db->lastInsertId();
        $this->db->executeQuery("INSERT INTO periods (event_id, user_id, name, description, sdate, stime, edate, etime, color) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [$eid, $uid, (string)$name, (string)$desc, $sd, $st, $ed, $et, $color]);
        return true;
    }
    function update_period($pid, $name, $desc, $color, $ed, $et=0, $sd, $st=0){
        global $user;
        $uid = (int)$user->getc('id');
        $this->db->executeQuery("UPDATE periods SET name = ?, description = ?, sdate = ?, stime = ?, edate = ?, etime = ?, color = ? WHERE id = ? AND user_id = ? LIMIT 1", [(string)$name, (string)$desc, $sd, $st, $ed, $et, $color, $pid, $uid]);
        return true;
    }
    function delete_period($pid){
        global $user;
        $uid = (int)$user->getc('id');
        $eid = (int)$this->db->executeQuery("SELECT event_id FROM periods WHERE id = ? AND user_id = ? LIMIT 1", [$pid, $uid])->fetch()['event_id'];
        $this->db->executeQuery("DELETE FROM periods WHERE id = ? AND user_id = ? LIMIT 1", [$pid, $uid]);
        if($this->db->executeQuery("SELECT COUNT(1) as c FROM periods WHERE event_id = ?", [$eid])->fetch()['c'] == 0){
            $this->db->executeQuery("DELETE FROM events WHERE id = ? LIMIT 1", [$eid]);
        }
        return true;

    }
    function handle_event($d){
        if(!isset($d['type'])) return ['type'=>'error', 'text'=>'Tip invalid de date'];
        if($d['type']=='event'){
            $name = (isset($d['title']) && !empty($d['title']))?trim($d['title']):'Fără titlu';
            $sdate = $this->misc->render_date(isset($d['start_date'])?$d['start_date']:'');
            $edate = $this->misc->render_date(isset($d['end_date'])?$d['end_date']:'');
            $stime = $this->misc->render_time(isset($d['start_time'])?$d['start_time']:'');
            $etime = $this->misc->render_time(isset($d['end_time'])?$d['end_time']:'');

            $sd = (string)$this->misc->gentime($sdate, 'date');
            $st = (string)$this->misc->gentime($stime, 'time');

            $color = preg_replace("/[^a-zA-Z0-9#]+/", "", $d['color']);

            $ed = (string)$this->misc->gentime($edate, 'date');
            $et = (string)$this->misc->gentime($etime, 'time');

            if(empty(trim($d['start_time']))) $st = 0;
            if(empty(trim($d['end_time']))) $et = 0;

            if($et == 0) $et = date("H").date("i");
            if($st == 0) $st = date("H").date("i");
            $et = str_pad($et, 4, '0');
            $st = str_pad($st, 4, '0');

            $desc = isset($d['description'])&&!empty($d['description']) ? trim($d['description']) : '';

            if(isset($d['period_delete_id'])){
                //update
                $pid = (int)$d['period_delete_id'];
                if($pid!=0 && $this->delete_period($pid)){
                    return ['type'=>'success', 'msg'=>'Eveniment șters cu succes!'];
                }
            }elseif(isset($d['period_update_id'])){
                //update
                $pid = (int)$d['period_update_id'];
                if($pid!=0 && $this->update_period($pid, $name, $desc, $color, $ed, $et, $sd, $st)){
                    return ['type'=>'success', 'msg'=>'Eveniment editat cu succes!'];
                }
            }else{
                //insert
                if($this->insert_event($name, $desc, $color, $ed, $et, $sd, $st)){
                    return ['type'=>'success', 'msg'=>'Eveniment adăugat cu succes!'];
                }
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
    function get_event($pid){
        global $user;
        $uid = (int)$user->getc('id');
        $qr = $this->db->executeQuery("SELECT periods.*, events.title FROM periods INNER JOIN events ON periods.event_id=events.id WHERE periods.user_id = ? AND periods.id = ?", [$uid, (int)$pid])->fetch();

        return $qr;
    }

}

$model = new model($app, $misc);
