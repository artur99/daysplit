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
$router_ajax_event = function(Request $r)use($model){
    $resp = new JsonResponse();
    $data = $r->request->all();
    $resp->setData($model->handle_event(isset($data['data'])?$data['data']:0));
    return $resp;
};
$router_ajax_get_3days = function(Request $r)use($model){
    $resp = new JsonResponse();
    $data = $r->request->all();
    $resp->setData($model->get_3days($data['day']));
    return $resp;
};
$router_ajax_get_event = function(Request $r)use($model){
    $resp = new JsonResponse();
    $data = $r->request->all();
    $resp->setData($model->get_event($data['period_id']));
    return $resp;
};
