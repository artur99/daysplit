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
include 'app/misc.php';
include 'app/executers.php';
include 'app/miscconf.php';
include 'app/langconf.php';

include 'app/user.php';

include 'app/mail.php';
include 'app/model.php';
include 'app/routers.php';





$app->before(function ($request)use($app) {
    $request->getSession()->start();
    $rm = new RequestMatcher();
    $rm->matchPath("/ajax/.*");
    if($rm->matches($request)){
        if($app['csrf']->getToken('main')->__tostring() != $request->get('csrftoken')){
            return new JsonResponse(['type'=>'error','text'=>'Token invalid']);
        }
    }
    global_patches($app);
});

$app->run();
