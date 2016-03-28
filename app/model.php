<?php

class model{
    function __construct($app){
        $this->db = $app['db'];
    }
    public function get_properties($list){
        global $user;
        $id = $user->data("id");
        $sql = 'SELECT properties.*, keyfeatures.data AS keyfeatures, GROUP_CONCAT(images.name) as images FROM properties INNER JOIN keyfeatures ON properties.id=keyfeatures.property LEFT OUTER JOIN images ON properties.id=images.property WHERE properties.owner = ? AND properties.type = ? GROUP BY properties.id';
        $res = $this->db->fetchAll($sql, array((int)$id, (string)$list));
        return $res;
    }
    public function get_proprety($id){
        global $user;
        $uid = $user->data("id");
        $id = (int)$id;
        $sql = 'SELECT properties.*, keyfeatures.data AS keyfeatures, GROUP_CONCAT(images.name) as images FROM properties INNER JOIN keyfeatures ON properties.id=keyfeatures.property LEFT OUTER JOIN images ON properties.id=images.property WHERE properties.id = ? AND properties.owner = ? GROUP BY properties.id LIMIT 1';
        $res = $this->db->fetchAssoc($sql, array((int)$id, (string)$uid));
        $res['keyfeatures'] = (strlen($res['keyfeatures']))?explode('[;]', $res['keyfeatures']):array();
        $res['images'] = (strlen($res['images']))?explode(',', $res['images']):array();
        return $res;
    }
    public function get_keyfeatures($id){
        $sql = 'SELECT data FROM keyfeatures WHERE property = ?';
        $res = $this->db->fetchAssoc($sql, array((int)$id));
        return explode('[;]', $res['data']);
    }
    public function set_keyfeatures($id, $data, $sep="\n"){
        $data = explode($sep, $data);
        $data2 = array();
        foreach($data as $k){
            $d = trim(str_replace('[;]', '[]', $k));
            if(strlen($d)) $data2[]= $d;
        }
        if(sizeof($data2)>10) $data2 = array_slice($data2, 0, 10);
        $datas = implode('[;]', $data2);
        $sql = 'UPDATE keyfeatures SET data = ? WHERE property = ?';
        $stmt = $this->db->prepare($sql);
        $stmt->bindValue(1, (string)$datas);
        $stmt->bindValue(2, (int)$id);
        $stmt->execute();
        return true;
    }
    public function get_properties_filtered($filters, $page, $nopage){
        global $app;
        $where_car = $fet = [];
        foreach($filters as $filter){
            $where_car[]= 'properties.'.$filter[0].' '.$filter[1].' ?';
            $fet[]= is_int($filter[2])?(int)$filter[2]:$filter[2];
        }
        $where_car[]='publish_site = ?';
        $fet[]=(bool)true;
        $where_c = implode(' AND ', $where_car);
        
        $l1=(int)($page-1)*$nopage;
        $l2=(int)$nopage;
        $sql = 'SELECT properties.*, keyfeatures.data AS keyfeatures, GROUP_CONCAT(images.name) as images FROM properties INNER JOIN keyfeatures ON properties.id=keyfeatures.property LEFT OUTER JOIN images ON properties.id=images.property WHERE '.$where_c.' GROUP BY properties.id LIMIT '.$l1.', '.$l2.'';
        $res = (array)$this->db->fetchAll($sql, $fet);
        $to_render = explode(',', 'tenure,roomHeating,agencyType,age,period,centralHeating,propertyType,propertyStyle,possession');
        foreach($res as $k=>$d){
            foreach($to_render as $w){
                $res[$k][$w] = strrender($w, $res[$k][$w]);
            }
            $res[$k]['keyfeatures'] = (strlen($res[$k]['keyfeatures']))?explode('[;]', $res[$k]['keyfeatures']):array();
            $res[$k]['images'] = (strlen($res[$k]['images']))?explode(',', $res[$k]['images']):array();
            foreach($res[$k]['images'] as $k2=>$d){
                $res[$k]['images'][$k2] = $app['conf.url'].$app['twig.assets'].'uploads/'.$res[$k]['images'][$k2];
            }
        }
        return $res;
    }
    private function get_all($table, $chk=1){
        global $user;
        if($chk==1){
            $id = $user->data("id");
            $sql = 'SELECT * FROM '.$table.' WHERE owner = ?';
            $res = $this->db->fetchAll($sql, array((int)$id));
        }else{
            $sql = 'SELECT * FROM '.$table;
            $res = $this->db->fetchAll($sql);
        }
        return $res;
    }
    private function get_one($table, $id){
        $sql = 'SELECT * FROM '.$table.' WHERE id = ? LIMIT 1';
        $res = $this->db->fetchAssoc($sql, array((int)$id));
        return $res;
    }
    public function get_sellers(){
        return $this->get_all('sellers');
    }
    public function get_landlords(){
        return $this->get_all('landlords');
    }
    public function get_users(){
        return $this->get_all('users', 0);
    }
    public function get_user($id){
        return $this->get_one('users', $id);
    }
    public function get_plan($id){
        return $this->get_one('plans', $id);
    }
    public function get_plans(){
        return $this->get_all('plans', 0);
    }
    public function get_portals(){
        return $this->get_all('portals', 0);
    }
    public function prop_type($id){
        $sql = 'SELECT type FROM properties WHERE id = ?';
        $res = $this->db->fetchAssoc($sql, array((int)$id));
        return $res['type'];
    }
    public function get_single($table, $id){
        $sql = 'SELECT * FROM '.$table.' WHERE id = ?';
        $res = $this->db->fetchAssoc($sql, array((int)$id));
        return $res;
    }
    public function owncheck($table, $id){
        global $user;
        $uid = $user->data("id");
        $sql = 'SELECT COUNT(1) FROM '.$table.' WHERE id = ? AND owner = ?';
        $res = $this->db->fetchArray($sql, array((int)$id, (int)$uid));
        return ($res[0])?true:false;
    }
    public function imgcheck($id, $imgid){
        global $user;
        $uid = $user->data("id");
        $sql = 'SELECT COUNT(1) FROM images WHERE id = ? AND property = ?';
        $res = $this->db->fetchArray($sql, array((int)$imgid, (int)$id));
        return ($res[0])?true:false;
    }
    public function get_images($id){
        global $user;
        $uid = $user->data("id");
        $sql = 'SELECT * FROM images WHERE property = ?';
        $res = $this->db->fetchAll($sql, array((int)$id));
        return $res;
    }
    public function property_add($kind, $data){
        global $user;
        $res=array();
        
        if(!isset($data['price']) || empty($data['price'])) return 'Price not set!';
        $res['price'] = abs($data['price']);
        
        if(!isset($data['sellerId'])) $res['sellerId'] = NULL;
        elseif(!$this->owncheck('sellers', $data['sellerId'])) return 'This is not one of your sellers!';
        else $res['sellerId'] = $data['sellerId'];
        
        if(!isset($data['floorarea'])) $res['floorarea'] = NULL;
        else $res['floorarea'] = abs((float)($data['floorarea']));
        
        $oth_ints = array('numBedrooms','numBathrooms','numLivingrooms');
        foreach($oth_ints as $k){
            if(!isset($data[$k]) || empty($data[$k])) $res[$k] = NULL;
            else $res[$k] = (int)abs(intval($data[$k]));
        }
        
        $oth = array('address1','address2','address3','address4','city','country','postcode','name_number','tenure','roomHeating','agencyType','age','period','centralHeating','propertyType','propertyStyle','possession','description1','charges','arrangements','particulars');
        foreach($oth as $k){
            /*if(!isset($data[$k]) || !strlen((string)$data[$k])) return ucfirst(preg_replace('/([A-Z])/', ' $1', $k)).' not set!';*//*else*/
            $res[$k] = isset($data[$k])?$data[$k]:NULL;
        }
        $oth_bool = array('publish_site','publish_portal','needs_renovation','security_specified','is_safe','has_alarm');
        foreach($oth_bool as $k){
            $res[$k] = isset($data[$k])&&$data[$k]?true:false;
        }
        $k=1;
        $data = json_encode($res);
        $uid = $user->data("id");
        $sql = "INSERT INTO properties(id, owner, type, price, numBedrooms, numBathrooms, numLivingrooms, name_number, address1, address2, address3, address4, country, city, postcode, publish_site, publish_portal, sellerId, tenure, roomHeating, agencyType, age, period, centralHeating, propertyType, propertyStyle, possession, description1, floorarea, charges, needs_renovation, security_specified, is_safe, has_alarm, particulars,arrangements) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        $sql2 = "INSERT INTO keyfeatures VALUES (?,'')";
        $stmt = $this->db->prepare($sql);
        $stmt->bindValue($k++, NULL);
        $stmt->bindValue($k++, (int)$uid);
        $stmt->bindValue($k++, $kind);
        $stmt->bindValue($k++, (float)$res['price']);
        $stmt->bindValue($k++, $res['numBedrooms']);
        $stmt->bindValue($k++, $res['numBathrooms']);
        $stmt->bindValue($k++, $res['numLivingrooms']);
        $stmt->bindValue($k++, (string)$res['name_number']);
        $stmt->bindValue($k++, (string)$res['address1']);
        $stmt->bindValue($k++, (string)$res['address2']);
        $stmt->bindValue($k++, (string)$res['address3']);
        $stmt->bindValue($k++, (string)$res['address4']);
        $stmt->bindValue($k++, (string)$res['country']);
        $stmt->bindValue($k++, (string)$res['city']);
        $stmt->bindValue($k++, (string)$res['postcode']);
        $stmt->bindValue($k++, (bool)$res['publish_site']);
        $stmt->bindValue($k++, (bool)$res['publish_portal']);
        $stmt->bindValue($k++, (string)$res['sellerId']);
        $stmt->bindValue($k++, (string)$res['tenure']);
        $stmt->bindValue($k++, (string)$res['roomHeating']);
        $stmt->bindValue($k++, (string)$res['agencyType']);
        $stmt->bindValue($k++, (string)$res['age']);
        $stmt->bindValue($k++, (string)$res['period']);
        $stmt->bindValue($k++, (string)$res['centralHeating']);
        $stmt->bindValue($k++, (string)$res['propertyType']);
        $stmt->bindValue($k++, (string)$res['propertyStyle']);
        $stmt->bindValue($k++, (string)$res['possession']);
        $stmt->bindValue($k++, (string)$res['description1']);
        $stmt->bindValue($k++, $res['floorarea']);
        $stmt->bindValue($k++, (string)$res['charges']);
        $stmt->bindValue($k++, (bool)$res['needs_renovation']);
        $stmt->bindValue($k++, (bool)$res['security_specified']);
        $stmt->bindValue($k++, (bool)$res['is_safe']);
        $stmt->bindValue($k++, (bool)$res['has_alarm']);
        $stmt->bindValue($k++, (string)$res['particulars']);
        $stmt->bindValue($k++, (string)$res['arrangements']);
        $stmt->execute();
        $lid = $this->db->lastInsertId();
        $stmt2 = $this->db->prepare($sql2);
        $stmt2->bindValue(1, (int)$lid);
        $stmt2->execute();
        return true;
    }
    public function seller_add($data){
        global $user;
        $res=array();
        
        if(!isset($data['name']) || empty($data['name'])) return 'Name not set!';
        $res['name'] = $data['name'];
        
        if(!isset($data['contactnumber'])) return 'Contact Number not set!';
        $res['contactnumber'] = $data['contactnumber'];
    
        if(!isset($data['address1']) || empty($data['address1'])) return 'Address 1 not set!';
        $res['address1'] = $data['address1'];
        
        if(!isset($data['address2'])) return 'Address 2 not set!';
        $res['address2'] = $data['address2'];
        
        if(!isset($data['address3'])) return 'Address 3 not set!';
        $res['address3'] = $data['address3'];
        
        if(!isset($data['city'])) return 'City not set!';
        $res['city'] = $data['city'];
        
        if(!isset($data['postcode'])) return 'Postcode not set!';
        $res['postcode'] = $data['postcode'];
        
        $uid = $user->data("id");
        $sql = "INSERT INTO sellers(id, owner, name, contactnumber, address1, address2, address3, city, postcode) VALUES (?,?,?,?,?,?,?,?,?)";
        $stmt = $this->db->prepare($sql);
        $stmt->bindValue(1, NULL);
        $stmt->bindValue(2, (int)$uid);
        $stmt->bindValue(3, (string)$res['name']);
        $stmt->bindValue(4, (string)$res['contactnumber']);
        $stmt->bindValue(5, (string)$res['address1']);
        $stmt->bindValue(6, (string)$res['address2']);
        $stmt->bindValue(7, (string)$res['address3']);
        $stmt->bindValue(8, (string)$res['city']);
        $stmt->bindValue(9, (string)$res['postcode']);
        $stmt->execute();
        return true;
    }
    public function landlord_add($data){
        global $user;
        $res=array();
        
        if(!isset($data['name']) || empty($data['name'])) return 'Name not set!';
        $res['name'] = $data['name'];
        
        if(!isset($data['contactnumber'])) return 'Contact Number not set!';
        $res['contactnumber'] = $data['contactnumber'];
    
        if(!isset($data['address1']) || empty($data['address1'])) return 'Address 1 not set!';
        $res['address1'] = $data['address1'];
        
        if(!isset($data['address2'])) return 'Address 2 not set!';
        $res['address2'] = $data['address2'];
        
        if(!isset($data['address3'])) return 'Address 3 not set!';
        $res['address3'] = $data['address3'];
        
        if(!isset($data['city'])) return 'City not set!';
        $res['city'] = $data['city'];
        
        if(!isset($data['postcode'])) return 'Postcode not set!';
        $res['postcode'] = $data['postcode'];
        
        $uid = $user->data("id");
        $sql = "INSERT INTO landlords(id, owner, name, contactnumber, address1, address2, address3, city, postcode) VALUES (?,?,?,?,?,?,?,?,?)";
        $stmt = $this->db->prepare($sql);
        $stmt->bindValue(1, NULL);
        $stmt->bindValue(2, (int)$uid);
        $stmt->bindValue(3, (string)$res['name']);
        $stmt->bindValue(4, (string)$res['contactnumber']);
        $stmt->bindValue(5, (string)$res['address1']);
        $stmt->bindValue(6, (string)$res['address2']);
        $stmt->bindValue(7, (string)$res['address3']);
        $stmt->bindValue(8, (string)$res['city']);
        $stmt->bindValue(9, (string)$res['postcode']);
        $stmt->execute();
        return true;
    }
    public function property_edit($id, $data){
        global $user;
        $res=array();
        
        if(!isset($data['price']) || empty($data['price'])) return 'Price not set!';
        $res['price'] = abs($data['price']);
        
        if(!isset($data['sellerId'])) $res['sellerId'] = NULL;
        elseif(!$this->owncheck('sellers', $data['sellerId'])) return 'This is not one of your sellers!';
        else $res['sellerId'] = $data['sellerId'];
        
        if(!isset($data['floorarea'])) $res['floorarea'] = NULL;
        else $res['floorarea'] = abs((float)($data['floorarea']));
        
        $oth_ints = array('numBedrooms','numBathrooms','numLivingrooms');
        foreach($oth_ints as $k){
            if(!isset($data[$k]) || empty($data[$k])) $res[$k] = NULL;
            else $res[$k] = (int)abs(intval($data[$k]));
        }
        
        $oth = array('address1','address2','address3','address4','city','country','postcode','name_number','tenure','roomHeating','agencyType','age','period','centralHeating','propertyType','propertyStyle','possession','description1','charges','arrangements','particulars');
        foreach($oth as $k){
            /*if(!isset($data[$k]) || !strlen((string)$data[$k])) return ucfirst(preg_replace('/([A-Z])/', ' $1', $k)).' not set!';*//*else*/
            $res[$k] = isset($data[$k])?$data[$k]:NULL;
        }
        $oth_bool = array('publish_site','publish_portal','needs_renovation','security_specified','is_safe','has_alarm');
        foreach($oth_bool as $k){
            $res[$k] = isset($data[$k])&&$data[$k]?true:false;
        }
        $k=1;
        $uid = $user->data("id");
        $sql = "UPDATE properties SET price = ?, numBedrooms = ?, numBathrooms = ?, numLivingrooms = ?, name_number = ?, address1 = ?, address2 = ?, address3 = ?, address4 = ?, country = ?, city = ?, postcode = ?, publish_site = ?, publish_portal = ?, sellerId = ?, tenure = ?, roomHeating = ?, agencyType = ?, age = ?, period = ?, centralHeating = ?, propertyType = ?, propertyStyle = ?, possession = ?, description1 = ?, floorarea = ?, charges = ?, needs_renovation = ?, security_specified = ?, is_safe = ?, has_alarm = ?, particulars = ?, arrangements = ?  WHERE id = ? AND owner = ?";
        $stmt = $this->db->prepare($sql);
        
        $stmt->bindValue($k++, (float)$res['price']);
        $stmt->bindValue($k++, $res['numBedrooms']);
        $stmt->bindValue($k++, $res['numBathrooms']);
        $stmt->bindValue($k++, $res['numLivingrooms']);
        $stmt->bindValue($k++, (string)$res['name_number']);
        $stmt->bindValue($k++, (string)$res['address1']);
        $stmt->bindValue($k++, (string)$res['address2']);
        $stmt->bindValue($k++, (string)$res['address3']);
        $stmt->bindValue($k++, (string)$res['address4']);
        $stmt->bindValue($k++, (string)$res['country']);
        $stmt->bindValue($k++, (string)$res['city']);
        $stmt->bindValue($k++, (string)$res['postcode']);
        $stmt->bindValue($k++, (bool)$res['publish_site']);
        $stmt->bindValue($k++, (bool)$res['publish_portal']);
        $stmt->bindValue($k++, (string)$res['sellerId']);
        $stmt->bindValue($k++, (string)$res['tenure']);
        $stmt->bindValue($k++, (string)$res['roomHeating']);
        $stmt->bindValue($k++, (string)$res['agencyType']);
        $stmt->bindValue($k++, (string)$res['age']);
        $stmt->bindValue($k++, (string)$res['period']);
        $stmt->bindValue($k++, (string)$res['centralHeating']);
        $stmt->bindValue($k++, (string)$res['propertyType']);
        $stmt->bindValue($k++, (string)$res['propertyStyle']);
        $stmt->bindValue($k++, (string)$res['possession']);
        $stmt->bindValue($k++, (string)$res['description1']);
        $stmt->bindValue($k++, (float)$res['floorarea']);
        $stmt->bindValue($k++, (string)$res['charges']);
        $stmt->bindValue($k++, (bool)$res['needs_renovation']);
        $stmt->bindValue($k++, (bool)$res['security_specified']);
        $stmt->bindValue($k++, (bool)$res['is_safe']);
        $stmt->bindValue($k++, (bool)$res['has_alarm']);
        $stmt->bindValue($k++, (string)$res['particulars']);
        $stmt->bindValue($k++, (string)$res['arrangements']);
        $stmt->bindValue($k++, (int)$id);
        $stmt->bindValue($k++, (int)$uid);
        $stmt->execute();
        $sql = 'SELECT type FROM properties WHERE id = ? LIMIT 1';
        $res = $this->db->fetchAssoc($sql, array((int)$id));
        return array('kind'=>$res['type']);
    }
    public function seller_edit($data, $id){
        global $user;
        $res=array();
        
        if(!isset($data['name']) || empty($data['name'])) return 'Name not set!';
        $res['name'] = $data['name'];
        
        if(!isset($data['contactnumber'])) return 'Contact Number not set!';
        $res['contactnumber'] = $data['contactnumber'];
        
        if(!isset($data['address1']) || empty($data['address1'])) return 'Address 1 not set!';
        $res['address1'] = $data['address1'];
        
        if(!isset($data['address2'])) return 'Address 2 not set!';
        $res['address2'] = $data['address2'];
        
        if(!isset($data['address3'])) return 'Address 3 not set!';
        $res['address3'] = $data['address3'];
        
        if(!isset($data['city'])) return 'City not set!';
        $res['city'] = $data['city'];
        
        if(!isset($data['postcode'])) return 'Postcode not set!';
        $res['postcode'] = $data['postcode'];
        
        $uid = $user->data("id");
        $sql = "UPDATE sellers SET name = ?, contactnumber = ?, address1 = ?, address2 = ?, address3 = ?, city = ?, postcode = ? WHERE id = ? AND owner = ?";
        $stmt = $this->db->prepare($sql);
        $stmt->bindValue(1, (string)$res['name']);
        $stmt->bindValue(2, (string)$res['contactnumber']);
        $stmt->bindValue(3, (string)$res['address1']);
        $stmt->bindValue(4, (string)$res['address2']);
        $stmt->bindValue(5, (string)$res['address3']);
        $stmt->bindValue(6, (string)$res['city']);
        $stmt->bindValue(7, (string)$res['postcode']);
        $stmt->bindValue(8, (int)$id);
        $stmt->bindValue(9, (int)$uid);
        $stmt->execute();
        return true;
    }
    public function landlord_edit($data, $id){
        global $user;
        $res=array();
        
        if(!isset($data['name']) || empty($data['name'])) return 'Name not set!';
        $res['name'] = $data['name'];
        
        if(!isset($data['contactnumber'])) return 'Contact Number not set!';
        $res['contactnumber'] = $data['contactnumber'];
        
        if(!isset($data['address1']) || empty($data['address1'])) return 'Address 1 not set!';
        $res['address1'] = $data['address1'];
        
        if(!isset($data['address2'])) return 'Address 2 not set!';
        $res['address2'] = $data['address2'];
        
        if(!isset($data['address3'])) return 'Address 3 not set!';
        $res['address3'] = $data['address3'];
        
        if(!isset($data['city'])) return 'City not set!';
        $res['city'] = $data['city'];
        
        if(!isset($data['postcode'])) return 'Postcode not set!';
        $res['postcode'] = $data['postcode'];
        
        $uid = $user->data("id");
        $sql = "UPDATE landlords SET name = ?, contactnumber = ?, address1 = ?, address2 = ?, address3 = ?, city = ?, postcode = ? WHERE id = ? AND owner = ?";
        $stmt = $this->db->prepare($sql);
        $stmt->bindValue(1, (string)$res['name']);
        $stmt->bindValue(2, (string)$res['contactnumber']);
        $stmt->bindValue(3, (string)$res['address1']);
        $stmt->bindValue(4, (string)$res['address2']);
        $stmt->bindValue(5, (string)$res['address3']);
        $stmt->bindValue(6, (string)$res['city']);
        $stmt->bindValue(7, (string)$res['postcode']);
        $stmt->bindValue(8, (int)$id);
        $stmt->bindValue(9, (int)$uid);
        $stmt->execute();
        return true;
    }
    private function deleter($table, $id, $chk=1){
        global $user;
        $uid = $user->data("id");
        if($chk) $sql = 'DELETE FROM '.$table.' WHERE id = ? AND owner = ? LIMIT 1';
        else $sql = 'DELETE FROM '.$table.' WHERE id = ? LIMIT 1';
        $stmt = $this->db->prepare($sql);
        $stmt->bindValue(1, (int)$id);
        if($chk) $stmt->bindValue(2, (int)$uid);
        $stmt->execute();
        return true;
    }
    public function seller_delete($id){
        return $this->deleter('sellers', $id);
    }
    public function landlord_delete($id){
        return $this->deleter('landlords', $id);
    }
    public function propr_delete($id){
        $this->deleter('properties', $id);
        return true;
    }
    public function user_delete($id){
        return $this->deleter('users', $id, 0);
    }
    public function plan_delete($id){
        return $this->deleter('plans', $id, 0);
    }
    public function propr_add_img($id, $file){
        global $app;
        $mime = $file->getClientMimeType();
        $ext = $file->getClientOriginalExtension();
        $exts = ['jpg','png','bmp','gif','jpeg'];
        if(!in_array($ext, $exts)) return 'Extension not allowed...';
        if(!$file->isValid()) return 'Invalid image...';
        if(explode('/', $mime)[0]!='image') return 'This is not an image...';
        
        $imgname = (string)round(microtime(true)/2300).rand(100,999).time().rand(100,999).'.'.$ext;
        $file->move($app['conf.path'].'/assets/uploads/', $imgname);
        $sql = 'INSERT INTO images(id, property, name) VALUES (?,?,?)';
        $stmt = $this->db->prepare($sql);
        $stmt->bindValue(1, NULL);
        $stmt->bindValue(2, (int)$id);
        $stmt->bindValue(3, (string)$imgname);
        $stmt->execute();
        return true;
    }
    public function propr_edit_imgs($id, $data){
        global $app;
        if(!$this->owncheck('properties', $id)) return "Acces denied on this property!";
        $img = $this->get_images($id);
        $toup = array();
        foreach($data as $k=>$lbls){
            $imgn = explode('_', $k)[1];
            foreach($img as $imgins){
                if($imgins['id']==$imgn){
                    $toup[$imgn]=$lbls;
                    break;
                }
            }
        }
        foreach($toup as $name => $value){
            $sql = 'UPDATE images SET label = ? WHERE id = ?';
            $stmt = $this->db->prepare($sql);
            $stmt->bindValue(1, (string)$value);
            $stmt->bindValue(2, (int)$name);
            $stmt->execute();
        }
        return true;
    }
    public function propr_del_img($id, $imgid){
        global $app;
        $sql1 = 'SELECT name FROM images WHERE id = ? AND property = ?';
        $sql2 = 'DELETE FROM images WHERE id = ? AND property = ?';
        $res = $this->db->fetchAssoc($sql1, array((int)$imgid,(int)$id));
        unlink($app['conf.path'].'/assets/uploads/'.$res['name']);
        $this->db->executeQuery($sql2, array((int)$imgid,(int)$id));
    }
    public function edit_user($id, $data){
        if(!isset($data['name'])||empty($data['name']))return 'No name inserted for user...';
        if(!isset($data['email'])||empty($data['email']))return 'No email inserted for user...';
        if(!isset($data['role'])||empty($data['role']))return 'No role set for user...';
        if(!isset($data['plan'])||empty($data['plan']))return 'No plan set for user...';
        $sqlpart='';
        if(isset($data['pass'])&&strlen($data['pass'])>1){
            if(strlen($data['pass'])<6)return 'Password is too short...';
            if($data['pass']!=$data['passc'])return 'Passwords don\'t match';
            $sqlpart = ', pass = ?';
        }
        $sql = 'UPDATE users SET name = ?, email = ?, role = ?, plan = ?'.$sqlpart.' WHERE id = ? LIMIT 1';
        $stmt = $this->db->prepare($sql);
        $stmt->bindValue(1, (string)$data['name']);
        $stmt->bindValue(2, (string)$data['email']);
        $stmt->bindValue(3, (string)$data['role']);
        $stmt->bindValue(4, (string)$data['plan']);
        if(strlen($sqlpart)){
            $stmt->bindValue(5, (string)md5($data['pass']));
            $stmt->bindValue(6, (int)$id);
        }else $stmt->bindValue(5, (int)$id);
        $stmt->execute();
        return true;
    }
    public function add_user($data){
        if(!isset($data['name'])||empty($data['name']))return 'No name inserted for user...';
        if(!isset($data['email'])||empty($data['email']))return 'No email inserted for user...';
        if(!isset($data['role'])||empty($data['role']))return 'No role set for user...';
        if(!isset($data['plan'])||empty($data['plan']))return 'No plan set for user...';
        if(!isset($data['pass'])||empty($data['pass']))return 'Password not set for user...';
        if(strlen($data['pass'])<6)return 'Passwrd is too short...';
        if($data['pass']!=$data['passc'])return 'Passwords don\'t match';
        $sql = 'INSERT INTO users VALUES (NULL, ?, ?, ?, ?, ?)';
        $stmt = $this->db->prepare($sql);
        $stmt->bindValue(1, (string)$data['email']);
        $stmt->bindValue(2, (string)$data['name']);
        $stmt->bindValue(3, (string)md5($data['pass']));
        $stmt->bindValue(4, (string)$data['plan']);
        $stmt->bindValue(5, (string)$data['role']);
        $stmt->execute();
        return true;
    }
    public function edit_plan($id, $data){
        if(!isset($data['name'])||empty($data['name']))return 'No name inserted for this plan...';
        if(!isset($data['portals']))$data['portals']='';
        else $data['portals'] = implode(',',$data['portals']);
        
        $sql = 'UPDATE plans SET name = ?, portals = ? WHERE id = ? LIMIT 1';
        $stmt = $this->db->prepare($sql);
        $stmt->bindValue(1, (string)$data['name']);
        $stmt->bindValue(2, (string)$data['portals']);
        $stmt->bindValue(3, (int)$id);
        $stmt->execute();
        return true;
    }
    public function add_plan($data){
        if(!isset($data['name'])||empty($data['name']))return 'No name inserted for this plan...';
        if(!isset($data['portals']))$data['portals']='';
        else $data['portals'] = implode(',',$data['portals']);
        
        $sql = 'INSERT INTO plans VALUES (NULL, ?, ?)';
        $stmt = $this->db->prepare($sql);
        $stmt->bindValue(1, (string)$data['name']);
        $stmt->bindValue(2, (string)$data['portals']);
        $stmt->execute();
        return true;
    }
}

$model = new model($app);