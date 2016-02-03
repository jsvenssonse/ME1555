<?php

class Core{

    private $_DB = object;
    public $json = object;

    public function __construct(){
        //require database files and start database obj
        require_once __DIR__ . '/Database.php';
        $this->_DB = new Database();
    }
    //
    public function Fetch($string){
        $this->Save($string);
    }

    private function Save(){
        $this->_DB->SaveXml($this->json);
    }

    public function DisplayXml(){
        $xml = $this->_DB->ReadXml();
        include_once 'Display.html';
    }
}
