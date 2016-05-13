<?php
date_default_timezone_set("Europe/Bucharest");

$app['conf.path'] = dirname(dirname($_SERVER['SCRIPT_FILENAME']));
$app['twig.path'] = $app['conf.path'].'/templates';
$app['twig.assets'] = '/assets/';
$app['conf.url'] = function($app){
    return $app['request']->getScheme() . '://' . $app['request']->getHttpHost() . $app['request']->getBasePath();
};


$config = (new Symfony\Component\Yaml\Parser())->parse(file_get_contents($app['conf.path']."/app/conf.yaml"));

foreach($config as $k=>$v){
    $app[$k]=$v;
}
unset($config);

$app['db.options'] = array(
    'driver' => 'pdo_mysql',
    'host' => $app['conf.db.host'],
    'user' => $app['conf.db.user'],
    'password' => $app['conf.db.pass'],
    'dbname' => $app['conf.db.name'],
    'charset'   => 'utf8'
);

putenv('FACEBOOK_APP_ID='.$app['conf.facebook.app_id']);
putenv('FACEBOOK_APP_SECRET='.$app['conf.facebook.app_secret']);
