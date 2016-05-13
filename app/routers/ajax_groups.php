<?php

use Silex\Provider;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

$router_ajax_groups = function(Request $r)use($app, $model){
    $resp = new JsonResponse();
    $data = $r->request->all();
    $resp->setData($model->handle_group(isset($data)?$data:0));
    return $resp;
};
$router_ajax_gr_getsettings = function($gid)use($app,$model){
    $resp = new JsonResponse();
    if(!$app['user']->in_group($gid)){
        $resp->setData(['type'=>'error','text'=>'Acces invalid!']);
        return $resp;
    }
    $resp->setData($model->get_gr_settings($gid));
    return $resp;
};
$router_ajax_gr_getmembers = function($gid)use($app,$model){
    $resp = new JsonResponse();
    if(!$app['user']->in_group($gid)){
        $resp->setData(['type'=>'error','text'=>'Acces invalid!']);
        return $resp;
    }
    $resp->setData($model->get_gr_members($gid));
    return $resp;
};
$router_ajax_gr_addmember = function(Request $r, $gid)use($app,$model){
   $resp = new JsonResponse();
   if(!$app['user']->in_group($gid)){
       $resp->setData(['type'=>'error','text'=>'Acces invalid!']);
       return $resp;
   }
   $data = $r->request->all();
   $resp->setData($model->add_gr_member($gid, $data['email']));
   return $resp;
};
$router_ajax_gr_delmember = function(Request $r, $gid)use($app, $model){
   $resp = new JsonResponse();
   if(!$app['user']->in_group($gid)){
       $resp->setData(['type'=>'error','text'=>'Acces invalid!']);
       return $resp;
   }
   $data = $r->request->all();
   $resp->setData($model->del_gr_member($gid, $data['uid']));
   return $resp;
};
