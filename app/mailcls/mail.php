<?php
class mailcls{
    function __construct(){
        //Nothing here...
    }
    public function send_signup($email){

    }
    public function send_reset($emai, $data){
        $link = $data['reset_link'];
        file_put_contents('data.txt', $link);
    }

}
