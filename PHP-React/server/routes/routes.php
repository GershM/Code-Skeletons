<?php
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use \Slim\App;

require __DIR__ . "/../database/Database.php";

function buildRoutes(App $app) : void {
    $app->group('',function() {
        $this->get('/hello/{name}', function (Request $request, Response $response, array $args) {
            $name = $args['name'];

            $response->getBody()->write($name);

            return $response;
        });
    });
}
