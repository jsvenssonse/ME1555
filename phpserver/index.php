<?php
echo header("Access-Control-Allow-Origin: *");
require_once __DIR__ . '/Core.php';

$Core = new Core();

var_dump(file_get_contents("php://input"));
echo "<hr>";

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    //only if post exist
    //$Core->Fetch(file_get_contents("php://input"));
} else {
    $Core->DisplayXml();
}
