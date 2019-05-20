<?php
declare(strict_types=1);

require __DIR__ . "/../server/main.php";

/*
 * to prevent XSS attacks, we do not redirect with email address yet
 */
$proto = ($_SERVER['HTTPS'] ?? 'off') == 'on' ? 'https' : 'http';
$hostname = _activeHostnameByHost($_SERVER['HTTP_HOST']);
header("Location: {$proto}://{$hostname}/index.php");

