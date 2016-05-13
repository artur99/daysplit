<?php
use Silex\Provider;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;

$router_login_fb = function()use($app){
    $res0 = new JsonResponse();
    $fbck = $app['user']->fbauth($res0);

    // if(!$app['user']->cookie_login($resp)) $resp->setData(['type'=>'error']);
    if($fbck == 1) $resp = new RedirectResponse(g_link("/dashboard"));
    else $resp = new RedirectResponse($fbck);
    return $resp;
};
$router_ajax_login = function(Request $r)use($app){
    $resp = new JsonResponse();
    $pfdata = $r->request->all();
    $data = $app['user']->login_validate($pfdata);
    if(isset($data['error']) || !isset($data['id'])){
        $res['type'] = 'error';
        $res['text'] = isset($data['err'])?$data['err']:[];
    }elseif(isset($data['id'])){
        $keepin = isset($pfdata['keepin'])&&$pfdata['keepin']?1:0;
        $app['user']->login_mode1($data['id'], $keepin, $resp);
        $res['type'] = 'success';
    }
    $resp->setData($res);
    return $resp;
};
$router_ajax_relogin = function(Request $r)use($app){
    $resp = new JsonResponse();
    if(!$app['user']->cookie_login($resp, $r)) $resp->setData(['type'=>'error']);
    else $resp->setData(['type'=>'success']);
    return $resp;
};
$router_ajax_signup = function(Request $r)use($app){
    $err = $app['user']->signup_validate($r->request->all());
    if(!sizeof($err)){
        $res['type'] = 'success';
        $app['user']->signup_mode1($r->request->all());
    }else{
        $res['type'] = 'error';
        $res['text'] = $err;
    }
    return new JsonResponse($res);
};
$router_ajax_logout = function(Request $r)use($app){
    $app['session']->clear();
    $resp = new JsonResponse();
    $resp->setData(['type'=>'success']);
    $resp->headers->clearCookie('token');
    return $resp;
};
