<?php
echo header("Access-Control-Allow-Origin: *");
require_once __DIR__ . '/Core.php';

$Core = new Core();

if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest'){
    //only if post exist
    $Core->Fetch(file_get_contents("php://input"));
} else {
    $Core->DisplayXml();
}
