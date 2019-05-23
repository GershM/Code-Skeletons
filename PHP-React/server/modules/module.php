<?php
declare(strict_types=1);

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
    $app = new App();
    $app->group('',function() {
        $this->get('/hello/{name}', function (Request $request, Response $response, array $args) {
            $name = $args['name'];
            $response->getBody()->write("Hello, $name");            
            return $response;
        });
    });
    $app->run();
    return $app;
}