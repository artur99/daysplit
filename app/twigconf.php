<?php
use Silex\Provider;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

function g_link($link){
    global $app;
    return $app['conf.url'].'/'.ltrim($link, '/');
}
$app['twig'] = $app->share($app->extend('twig', function($twig,$app){
    $twig->addFunction(new \Twig_SimpleFunction('asset', function ($asset)use($app){
        return $app['conf.url'].$app['twig.assets'].ltrim($asset, '/');
    }));
    $twig->addFunction(new \Twig_SimpleFunction('user', function($what){
        global $user;
        return $user->data($what);
    }));
    $twig->addFunction(new \Twig_SimpleFunction('l', function($what)use($app){
        return $app['conf.url'].$what;
    }));
    return $twig;
}));
