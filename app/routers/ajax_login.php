<?php
use Silex\Provider;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

$router_login_fb = function()use($app,$user){
    // return $app['twig']->render('login.twig');
};
$router_ajax_login = function(Request $r)use($app,$user){
    $resp = new JsonResponse();
    $pfdata = $r->request->all();
    $data = $user->login_validate($pfdata);
    if(isset($data['error']) || !isset($data['id'])){
        $res['type'] = 'error';
        $res['text'] = isset($data['err'])?$data['err']:[];
    }elseif(isset($data['id'])){
        $keepin = isset($pfdata['keepin'])&&$pfdata['keepin']?1:0;
        $user->login_mode1($data['id'], $keepin, $resp);
        $res['type'] = 'success';
    }
    $resp->setData($res);
    return $resp;
};
$router_ajax_relogin = function(Request $r)use($app,$user){
    $resp = new JsonResponse();
    if(!$user->cookie_login($resp)) $resp->setData(['type'=>'error']);
    else $resp->setData(['type'=>'success']);
    return $resp;
};
$router_ajax_signup = function(Request $r)use($app,$user){
    $err = $user->signup_validate($r->request->all());
    if(!sizeof($err)){
        $res['type'] = 'success';
        $user->signup_mode1($r->request->all());
    }else{
        $res['type'] = 'error';
        $res['text'] = $err;
    }
    return new JsonResponse($res);
};
$router_ajax_logout = function(Request $r)use($app,$user){
    $app['session']->clear();
    $resp = new JsonResponse();
    $resp->setData(['type'=>'success']);
    $resp->headers->clearCookie('token');
    return $resp;
};
