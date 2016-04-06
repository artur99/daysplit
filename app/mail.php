<?php
class mailcls{
    function __construct($app){
        $this->db = $app['db'];
    }
    public function send_signup($email){

    }

}


$mailcls = new mailcls($app);
