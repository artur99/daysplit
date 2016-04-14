<?php
use Silex\Provider;
use Symfony\Component\Security;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RequestMatcher;
//$app->register(new Provider\SwiftmailerServiceProvider());
// $app->register(new Provider\SecurityServiceProvider());
// $app->register(new Provider\RememberMeServiceProvider());
$app->register(new Provider\ServiceControllerServiceProvider());
$app->register(new Provider\UrlGeneratorServiceProvider());
$app->register(new Provider\DoctrineServiceProvider());
$app->register(new Provider\SessionServiceProvider());
$app->register(new Provider\TwigServiceProvider());
include 'app/conf.php';
include 'app/user.php';
include 'app/langconf.php';
include 'app/miscconf.php';


include 'app/misc.php';
include 'app/mail.php';
include 'app/model.php';
include 'app/routers.php';

$app->get('/', $router);
$app->match('/account', $router_account);
$app->match('/dashboard', $router_dash);

$app->match('/login/facebook', $router_login_fb);
$app->match('/ajax/account/login', $router_ajax_login);
$app->match('/ajax/account/relogin', $router_ajax_relogin);
$app->match('/ajax/account/signup', $router_ajax_signup);
$app->match('/ajax/account/logout', $router_ajax_logout);

$app->match('/ajax/dash/time', $router_ajax_time);
$app->match('/ajax/dash/add', $router_ajax_add);




$app->before(function ($request)use($app) {
    $request->getSession()->start();
    $rm = new RequestMatcher();
    $rm->matchPath("/ajax/.*");
    if($rm->matches($request)){
        if($app['csrf']->getToken('main')->__tostring() != $request->get('csrftoken')){
            return new JsonResponse(['type'=>'error','text'=>'Token invalid']);
        }
    }
});

$app->run();
