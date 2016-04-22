<?php
include 'routers/mains.php';
include 'routers/ajax_login.php';
include 'routers/ajax_dash.php';


$app->get('/', $router);
$app->match('/account', $router_account);
$app->match('/dashboard', $router_dash);

$app->match('/fblogin', $router_login_fb);
$app->match('/ajax/account/login', $router_ajax_login);
$app->match('/ajax/account/relogin', $router_ajax_relogin);
$app->match('/ajax/account/signup', $router_ajax_signup);
$app->match('/ajax/account/logout', $router_ajax_logout);

$app->match('/ajax/dash/time', $router_ajax_time);
$app->match('/ajax/dash/add', $router_ajax_add);
$app->match('/ajax/dash/get/3days', $router_ajax_get_3days);
