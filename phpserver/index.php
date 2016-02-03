<?php
echo header("Access-Control-Allow-Origin: *");
require_once __DIR__ . '/Core.php';

$Core = new Core();
    
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    //only if post exist
    $Core->Save("javascript");
} else {
    $Core->DisplayXml();
}
