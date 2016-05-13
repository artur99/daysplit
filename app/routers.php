<?php
include 'routers/mains.php';
include 'routers/ajax_login.php';
include 'routers/ajax_dash.php';
include 'routers/ajax_groups.php';


$app->get('/', $router);
$app->match('/account', $router_account);
$app->match('/dashboard', $router_dash);
$app->match('/dashboard/groups', $router_dash_groups);
$app->match('/dashboard/group/{gid}', $router_dash_group_in);

$app->match('/fblogin', $router_login_fb);
$app->match('/ajax/account/login', $router_ajax_login);
$app->match('/ajax/account/relogin', $router_ajax_relogin);
$app->match('/ajax/account/signup', $router_ajax_signup);
$app->match('/ajax/account/logout', $router_ajax_logout);

$app->match('/ajax/dash/time', $router_ajax_time);
$app->match('/ajax/dash/event', $router_ajax_event);
$app->match('/ajax/dash/get/3days', $router_ajax_get_3days);
$app->match('/ajax/dash/get/settings', $router_ajax_get_settings);
$app->match('/ajax/dash/get/event', $router_ajax_get_event);
$app->match('/ajax/dash/get/todo', $router_ajax_get_todo);
$app->match('/ajax/dash/todo', $router_ajax_todo);
$app->match('/ajax/dash/settings', $router_ajax_settings);

$app->match('/ajax/dash/groups', $router_ajax_groups);
$app->match('/ajax/dash/group/settings/{gid}', $router_ajax_gr_getsettings);
$app->match('/ajax/dash/group/members/{gid}', $router_ajax_gr_getmembers);
$app->match('/ajax/dash/group/addmember/{gid}', $router_ajax_gr_addmember);
$app->match('/ajax/dash/group/delmember/{gid}', $router_ajax_gr_delmember);
