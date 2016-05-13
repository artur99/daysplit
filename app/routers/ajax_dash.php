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
    $resp->setData($model->handle_event(isset($data)?$data:0));
    return $resp;
};
$router_ajax_get_3days = function(Request $r)use($model){
    $resp = new JsonResponse();
    $data = $r->request->all();
    $data['gid'] = isset($data['gid'])?$data['gid']:0;
    $resp->setData($model->get_3days($data['day'], $data['gid']));
    return $resp;
};
$router_ajax_get_event = function(Request $r)use($model){
    $resp = new JsonResponse();
    $data = $r->request->all();
    $resp->setData($model->get_event($data['period_id'], isset($data['gid'])?$data['gid']:0));
    return $resp;
};
$router_ajax_todo = function(Request $r)use($model){
    $resp = new JsonResponse();
    $data = $r->request->all();
    $resp->setData($model->handle_todo($data));
    return $resp;
};
$router_ajax_get_todo = function()use($model){
    $resp = new JsonResponse();
    $resp->setData($model->get_todo());
    return $resp;
};
$router_ajax_get_settings = function()use($model){
    $resp = new JsonResponse();
    $resp->setData($model->get_settings());
    return $resp;

};
$router_ajax_settings = function(Request $r)use($model){
    $resp = new JsonResponse();
    $data = $r->request->all();
    $resp->setData($model->set_settings($data['data']));
    return $resp;
};
