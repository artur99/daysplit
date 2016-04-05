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
    // $data = $user->login_mode1($r->request->all());
    // var_dump($data);
    return new JsonResponse([
        'type' => 'error',
        'text' => [
            'password' => 'Date de logare incorecte...'
        ]
    ]);
};
$router_ajax_signup = function()use($app,$user){
    return new JsonResponse([
        'type' => 'error',
        'text' => [
            'email' => 'Această adresă email este deja folosită...',
            'password' => 'Parola este prea scurtă...',
            'cpassword' => 'Parolele nu corespund...',
        ]
    ]);
};
