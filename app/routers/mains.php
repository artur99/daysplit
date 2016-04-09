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

$router = function()use($app,$user){
    return $app['twig']->render('index.twig');
};

$router_account = function()use($app,$user){
    if($uid = $user->loggedin()) return $app['twig']->render('loggedin.twig', ['user'=>$user->get($uid, 'name,email')]);
    if($uid = $user->loggedin_cookie()) return $app['twig']->render('relogin.twig', ['user'=>$user->get($uid, 'name,email')]);
    return $app['twig']->render('login.twig');
};

$router_dash = function()use($app,$user,$model){
    if(!($uid = $user->loggedin())) return $app->redirect('/account');
    return $app['twig']->render('dashboard.twig');
};
