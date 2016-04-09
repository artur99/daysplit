<?php

use Silex\Provider;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

$router_ajax_time = function()use($model){
    $resp = new JsonResponse();
    $resp->setData($model->time());
    return $resp;
};
