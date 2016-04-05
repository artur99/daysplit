<?php
putenv('FACEBOOK_APP_ID=257868991214937');
putenv('FACEBOOK_APP_SECRET=8ee3cefff7168c8f2ef631b0d9828d7a');

$app['conf.path'] = dirname(dirname($_SERVER['SCRIPT_FILENAME']));
$app['twig.path'] = $app['conf.path'].'/app/templates';
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
