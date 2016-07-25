<?php
use Silex\Provider;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Security\Csrf\CsrfToken;
use Symfony\Component\Security\Csrf\CsrfTokenManager;

function g_link($link){
    global $app;
    return $app['conf.url'].'/'.ltrim($link, '/');
}
function global_patches($app){
    global $fb;
    $fb = new Facebook\Facebook(array(
      'appId'  => $app['conf.facebook.app_id'],
      'secret' => $app['conf.facebook.app_secret']
    ));
}

$app['csrf'] = $app->share(function () {
    return new CsrfTokenManager();
});
$app['twig'] = $app->share($app->extend('twig', function($twig,$app){
    $twig->addFunction(new \Twig_SimpleFunction('asset', function ($asset)use($app){
        return $app['conf.url'].$app['twig.assets'].ltrim($asset, '/');
    }));
    $twig->addFunction(new \Twig_SimpleFunction('user', function($what)use($app){
        return $app['user']->data($what);
    }));
    $twig->addFunction(new \Twig_SimpleFunction('l', function($what)use($app){
        return $app['conf.url'].$what;
    }));
    $twig->addFunction(new \Twig_SimpleFunction('csrftoken', function($id)use($app){
        return $app['csrf']->getToken($id)->__tostring();
    }));
    return $twig;
}));
$app['misc'] = $app->share(function() use ($app) {
    return new misc($app);
});
$app['user'] = $app->share(function() use ($app) {
    return new user($app);
});
$app['mailcls'] = $app->share(function() use ($app) {
    return new mailcls();
});

$app['executers'] = $app->share(function() use ($app) {
    return [
        'user' => new \DaySplit\Executers\UserExecuter($app['db']),
    ];
});
