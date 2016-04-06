<?php

class model{
    function __construct($app){
        $this->db = $app['db'];
    }

}

$model = new model($app);
