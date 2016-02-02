<?php

require_once __DIR__ . '/Core.php';

$Core = new Core();
$_POST['json'] = '{"lang" : "js"}';

$Core->Fetch($_POST['json']);


if($_SERVER['REQUEST_METHOD'] == 'POST'){
    //only if post exist
    $Core->Fetch($_POST['json']);
    //else use this
    //$Core->Fetch(json_decode(file_get_contents("php://input")));
}


/*
$json = '{"lang" : "js"}';
$json_obj = json_decode($json);
var_dump($json_obj->lang);
*/
