<?php

class model{
    function __construct( Silex\Application $app){
        $this->db = $app['db'];
        $this->misc = $app['misc'];
        $this->user = $app['user'];
    }
    public function time(){
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
    public function insert_event($name, $location, $desc, $color, $ed, $et=0, $sd, $st=0, $gid){
        $uid = (int)$this->user->getc('id');
        if($gid) $uid = 0;
        else $gid = 0;
        $this->db->executeQuery("INSERT INTO events (user_id, title, description, edate, etime, group_id) VALUES (?, ?, ?, ?, ?, ?)", [$uid, (string)$name, (string)$desc, $ed, $et, $gid]);
        $eid = (int)$this->db->lastInsertId();
        $this->db->executeQuery("INSERT INTO periods (event_id, user_id, group_id, name, location, description, sdate, stime, edate, etime, color) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [$eid, $uid, $gid, (string)$name, (string)$location, (string)$desc, $sd, $st, $ed, $et, $color]);
        return true;
    }
    public function update_period($pid, $name, $location, $desc, $color, $ed, $et=0, $sd, $st=0, $gid){
        $uid = (int)$this->user->getc('id');
        if($gid) $uid = 0;
        else $gid = 0;
        $this->db->executeQuery("UPDATE periods SET name = ?, location = ?, description = ?, sdate = ?, stime = ?, edate = ?, etime = ?, color = ? WHERE id = ? AND user_id = ? AND group_id = ? LIMIT 1", [(string)$name, (string)$location, (string)$desc, $sd, $st, $ed, $et, $color, $pid, $uid, $gid]);
        return true;
    }
    public function delete_period($pid, $gid){
        $uid = (int)$this->user->getc('id');
        if($gid) $uid = 0;
        else $gid = 0;
        $eid = (int)$this->db->executeQuery("SELECT event_id FROM periods WHERE id = ? AND user_id = ? AND group_id = ? LIMIT 1", [$pid, $uid, $gid])->fetch()['event_id'];
        $this->db->executeQuery("DELETE FROM periods WHERE id = ? AND user_id = ? AND group_id = ? LIMIT 1", [$pid, $uid, $gid]);
        if($this->db->executeQuery("SELECT COUNT(1) as c FROM periods WHERE event_id = ?", [$eid])->fetch()['c'] == 0){
            $this->db->executeQuery("DELETE FROM events WHERE id = ? LIMIT 1", [$eid]);
        }
        return true;

    }
    public function handle_event($d){
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

            $gid = isset($d['gid'])?(int)($d['gid']):0;

            if(empty(trim($d['start_time']))) $st = 0;
            if(empty(trim($d['end_time']))) $et = 0;

            if($et == 0) $et = date("H").date("i");
            if($st == 0) $st = date("H").date("i");
            $et = str_pad($et, 4, '0');
            $st = str_pad($st, 4, '0');

            $desc = isset($d['description'])&&!empty($d['description']) ? trim($d['description']) : '';
            $location = trim($d['location']);
            if(isset($d['period_delete_id'])){
                //delete
                $pid = (int)$d['period_delete_id'];
                if($pid!=0 && $this->delete_period($pid, $gid)){
                    return ['type'=>'success', 'msg'=>'Eveniment șters cu succes!'];
                }
            }elseif(isset($d['period_update_id'])){
                //update
                $pid = (int)$d['period_update_id'];
                if($pid!=0 && $this->update_period($pid, $name, $location, $desc, $color, $ed, $et, $sd, $st, $gid)){
                    return ['type'=>'success', 'msg'=>'Eveniment editat cu succes!'];
                }
            }else{
                //insert
                if($this->insert_event($name, $location, $desc, $color, $ed, $et, $sd, $st, $gid)){
                    return ['type'=>'success', 'msg'=>'Eveniment adăugat cu succes!'];
                }
            }
        }

    }
    public function get_3days($day, $gid){
        $sdate = (string)$this->misc->unix2date(time()+60*60*24*$day);
        $edate = (string)$this->misc->unix2date(time()+60*60*24*($day+2));
        $uid = (int)$this->user->getc('id');
        if($gid) $uid = 0;
        else $gid = 0;
        //edate - sdate
        $qr = $this->db->executeQuery("SELECT periods.*, events.title FROM periods INNER JOIN events ON periods.event_id=events.id WHERE events.user_id = ? AND events.group_id = ? AND periods.sdate <= ? AND periods.edate >= ?", [$uid, $gid, $edate, $sdate])->fetchAll();

        return $qr;
    }
    public function get_event($pid, $gid){
        $uid = (int)$this->user->getc('id');
        if($gid) $uid = 0;
        else $gid = 0;
        $qr = $this->db->executeQuery("SELECT periods.*, events.title FROM periods INNER JOIN events ON periods.event_id=events.id WHERE events.user_id = ? AND events.group_id = ? AND periods.id = ?", [$uid, $gid, (int)$pid])->fetch();

        return $qr;
    }
    public function get_todo(){
        $uid = (int)$this->user->getc('id');
        $qr = $this->db->executeQuery("SELECT * FROM todo WHERE user_id = ? ORDER BY id DESC LIMIT 30", [$uid])->fetchAll();
        return $qr;
    }
    public function todo_add($text){
        $uid = (int)$this->user->getc('id');
        $this->db->executeQuery("INSERT INTO todo (user_id, text, status) VALUES (?, ?, 0)", [$uid, (string)$text]);
        return ['tdid'=>(int)$this->db->lastInsertId()];
    }
    public function todo_turn($tdid, $to){
        $uid = (int)$this->user->getc('id');
        $tdid = (int)$tdid;
        $to = (int)($to == 'on'?1:0);
        $this->db->executeQuery("UPDATE todo SET status = ? WHERE id = ? AND user_id = ?", [$to, $tdid, $uid]);
        return 1;
    }
    public function handle_todo($data){
        if($data['do'] == 'add') return $this->todo_add($data['elem']);
        elseif($data['do'] == 'on' || $data['do'] == 'off') return $this->todo_turn($data['elem'], $data['do']);
    }
    public function get_settings(){
        $uid = (int)$this->user->getc('id');
        $data = $this->db->executeQuery("SELECT name, email FROM users WHERE id = ? LIMIT 1",[$uid])->fetch();
        return $data;
    }
    public function set_settings($data){
        $res = [];
        if(!isset($data['email']) || !$this->misc->validate($data, 'email')) $res['err'] = ['email'=>'Adresă de email invalidă'];
        else{
            if(isset($data['opassword'],$data['password'],$data['cpassword']) && !empty($data['opassword']) || !empty($data['password']) || !empty($data['cpassword'])){
                //wants to change the password
                if(!$this->user->checkpassword($data['opassword'])) $res['err'] = ['opassword'=>'Vechea parolă este greșită'];
                elseif(!$this->misc->validate($data, 'password')) $res['err'] = ['password'=>'Parola este prea scurtă'];
                elseif($data['password']!=$data['cpassword']) $res['err'] = ['cpassword'=>'Parolele nu corespund'];
                else{
                    $data = $this->misc->filter($data);
                    $this->user->direct_change('password', $data['password']);
                    $data = $this->misc->filter($data);
                }
            }
            $this->user->direct_change('emnm', $data);
            if(!isset($res['err']))$res['success'] = ['text'=>'Setări schimbate cu succes'];
        }
        return $res;
    }
    public function get_grouplist(){
        $uid = (int)$this->user->getc('id');
        $qr = $this->db->executeQuery("SELECT group_members.id, groups.* FROM group_members JOIN groups ON group_members.group_id = groups.id WHERE group_members.user_id = ?",[$uid])->fetchAll();
        return $qr;
    }
    public function insert_group($name, $desc, $color){
        $uid = (int)$this->user->getc('id');
        $tm = (int)time();
        $uno = 1;
        $this->db->executeQuery("INSERT INTO groups (owner_id, name, description, color, members, cdate) VALUES (?, ?, ?, ?, ?, ?)", [$uid, (string)$name, (string)$desc, $color, $uno, $tm]);
        $lid = (int)$this->db->lastInsertId();
        $this->db->executeQuery("INSERT INTO group_members (user_id, group_id, role) VALUES (?, ?, ?)", [$uid, $lid, $uno]);
        return $lid;
    }
    public function update_group($gid, $name, $color, $desc){
        $uid = (int)$this->user->getc('id');

        $this->db->executeQuery("UPDATE groups SET name = ?, color = ?, description = ? WHERE id = ? LIMIT 1", [(string)$name, (string)$color, (string)$desc, (int)$gid]);
        return true;
    }
    public function handle_group($d){
        $name = (isset($d['title']) && !empty($d['title']))?trim($d['title']):'Fără titlu';
        $color = preg_replace("/[^a-zA-Z0-9#]+/", "", $d['color']);

        $desc = isset($d['description'])&&!empty($d['description']) ? trim($d['description']) : '';

        if(isset($d['group_delete_id'])){
            //delete
            // $pid = (int)$d['period_delete_id'];
            // if($pid!=0 && $this->delete_period($pid)){
            //     return ['type'=>'success', 'msg'=>'Eveniment șters cu succes!'];
            // }
        }elseif(isset($d['do_edit'])){
            // update
            $gid = (int)$d['do_edit'];
            $this->update_group($gid, $name, $color, $desc);
        }else{
            //insert
            $lid = $this->insert_group($name, $desc, $color);
            if($lid){
                return ['type'=>'success', 'msg'=>'Eveniment adăugat cu succes!', 'inserted_id'=>$lid];
            }
        }
    }
    public function get_groupdata($gid){
        $uid = (int)$this->user->getc('id');
        $gid = (int)$gid;
        $q1 = $this->db->executeQuery("SELECT role FROM group_members WHERE user_id = ? AND group_id = ? LIMIT 1", [$uid, $gid])->fetch();
        if(!$q1 || !isset($q1['role']))return false;
        $q2 = $this->db->executeQuery("SELECT * FROM groups WHERE id = ? LIMIT 1", [$gid])->fetch();
        if(sizeof($q2)==0)return false;
        $q2['role'] = $q1['role'];
        return $q2;
    }
    public function get_gr_members($gid){
        return $this->db->executeQuery("SELECT users.email, users.id, group_members.group_id FROM group_members JOIN users ON group_members.user_id = users.id WHERE group_members.group_id = ?", [(int)$gid])->fetchAll();
    }
    public function get_gr_settings($gid){
        return $this->db->executeQuery("SELECT * FROM groups WHERE id = ?", [(int)$gid])->fetch();
    }
    public function add_gr_member($gid, $email){
        if(!$this->user->mail_exists($email)){
            return ['type'=>'error', 'text'=>'Nu există niciun cont cu această adresă'];
        }
        $gid = (int)$gid;
        $email = (string)$email;
        $id = (int)$this->db->executeQuery("SELECT id FROM users WHERE email = ?", [$email])->fetch()['id'];
        $this->db->executeQuery("INSERT INTO group_members (user_id, group_id) VALUES (?, ?)", [$id, $gid]);
        $this->db->executeQuery("UPDATE groups SET members = members+1 WHERE id = ?", [$gid]);
        return ['type'=>'success','text'=>'Adăugat cu succes'];
    }
    public function del_gr_member($gid, $uid){
        $params = [':user_id' => (int)$uid,':group_id' => (int)$gid];
        $this->groups_handle('delete', $data);
        $this->db->executeQuery("DELETE FROM group_members WHERE group_id = ? AND user_id = ? LIMIT 1", [$gid, $uid]);
        $this->db->executeQuery("UPDATE groups SET members = members - 1 WHERE id = ?", [$num, $gid]);
        return ['type'=>'success','text'=>'Eliminat cu succes'];
    }
    private function groups_handle($type, $data=[], $selector=[]){
        //add, edit, delete, get
    }
}

$model = new model($app);
