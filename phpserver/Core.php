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
        $this->json = json_decode($string);
        $this->Save();
    }

    private function Save(){
        $this->_DB->SaveData($json->lang);
    }

}
