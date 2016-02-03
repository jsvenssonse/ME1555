<?php
echo header("Access-Control-Allow-Origin: *");
require_once __DIR__ . '/Core.php';

$Core = new Core();

var_dump(file_get_contents("php://input"));
echo '<hr>';
var_dump($_POST);
echo '<hr>';
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    //only if post exist
    //$Core->Fetch($_POST['json']);
    //else use this
    //$Core->Fetch(json_decode(file_get_contents("php://input")));
} else {
    $Core->DisplayXml();
}
