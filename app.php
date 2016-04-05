<?php
use Silex\Provider;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
//$app->register(new Provider\SwiftmailerServiceProvider());
//$app->register(new Provider\SecurityServiceProvider());
//$app->register(new Provider\RememberMeServiceProvider());
$app->register(new Silex\Provider\DoctrineServiceProvider());
$app->register(new Provider\SessionServiceProvider());
$app->register(new Provider\ServiceControllerServiceProvider());
$app->register(new Provider\UrlGeneratorServiceProvider());
$app->register(new Provider\TwigServiceProvider());
include 'app/conf.php';
include 'app/user.php';
include 'app/langconf.php';
include 'app/twigconf.php';

include 'app/model.php';
include 'app/router.php';

$app->get('/', $router);
$app->match('/account', $router_account);
$app->match('/login/facebook', $router_login_fb);
$app->match('/ajax/account/login', $router_ajax_login);
$app->match('/ajax/account/signup', $router_ajax_signup);



$app->before(function ($request) {
    $request->getSession()->start();
});

$app->run();
