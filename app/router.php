<?php
use Silex\Provider;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
$app->error(function(\Exception $e, $code)use($app) {
    return new Response(
        $app['twig']->render('error.twig', ['error_code' => $code, 'error_text'=>$e->getMessage()]), $code
    );
});

//$router = function(Request $req)use($app,$user){
//    $data = $req->request->all();
//    if($req->isMethod('POST')&&isset($data['email'])&&isset($data['pass'])){
//        if($user->login($data['email'], $data['pass']))
//            return $app->redirect("/");
//        return $app['twig']->render('login.twig', array('error'=>1));
//    }
//    return $app['twig']->render('login.twig');
//};
//$router = function()use($app){
//    $app['session']->remove('user');
//    return $app->redirect('/');
//};

$router = function()use($app,$user){
    return $app['twig']->render('index.twig');
};

$router_account = function()use($app,$user){
    return $app['twig']->render('login.twig');
};
$router_login_fb = function()use($app,$user){
    return $app['twig']->render('login.twig');
};
$router_ajax_login = function(Request $r)use($app,$user){
    $pfdata = $r->request->all();
    $data = $user->login_validate($pfdata);
    if(isset($data['error']) || !isset($data['id'])){
        $res['type'] = 'error';
        $res['text'] = isset($data['err'])?$data['err']:[];
    }elseif(isset($data['id'])){
        $keepin = isset($pfdata['keepin'])&&$pfdata['keepin']?1:0;
        $user->login_mode1($data['id'], $keepin);
        $res['type'] = 'success';
    }
    return new JsonResponse($res);
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
