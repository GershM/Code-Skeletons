<?php
declare(strict_types=1);
require __DIR__.'/routes.php';
use \Slim\App;
use \Slim\Http\Request;
use \Slim\Http\Response;
//load composer auto loader (will load slim framework)

if (!defined('IS_TEST_VENDOR')) {
    require_once __DIR__ . '/../vendor/autoload.php';
} else {    
    require_once '/../vendor/autoload.php';
}

/**
 * create an slim api application object, used to route the entire application and handle all api calls from client
 * @return App
 */
function bootstrap() : App {
    $app = new App([
        'settings' => [
            'determineRouteBeforeAppMiddleware' => true,
            'displayErrorDetails' => true,
            'addContentLengthHeader' => false,
            ]]
        );

    buildRoutes($app);
    
    return $app;
}