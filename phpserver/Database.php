<?php

class Database{

    const xmlfile = 'lang.xml';
    private $xml = object;

    public function __construct(){
        $this->LoadXml();
        //Start DB Connection here
    }

    public function SaveXml($obj){
        $lang = $obj->lang;
        if(intval($this->xml->$lang[total]) !== 0){
            $total = intval($this->xml->$lang[total]);
            $this->xml->$lang[total] = $total + 1;
        } else {
            $this->xml->$lang[total] = 1;
        }
        $this->xml->asXML(Database::xmlfile);
    }

    private function LoadXml(){
        $this->xml = simplexml_load_file(Database::xmlfile) or die("Error: Cannot create object");
    }

    public function ReadXml(){
        return $this->xml;
    }
}
