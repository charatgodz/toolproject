<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class API_Controller extends CI_Controller{
    public function __construct(){
        parent::__construct();
        if(!empty($this->inputJSON())) $_POST = $this->inputJSON();
    }

    public function json($data, $status = 200){
      return  $this->output
                ->set_status_header($status)
                ->set_content_type('application/json')
                ->set_output(json_encode($data));
    }

    public function inputJSON($requestKey = null){
        $json = file_get_contents('php://input');
        $decodeArray = (array) json_decode($json);
        if($requestKey) return @$decodeArray[$requestKey];
        return $decodeArray;
    }

    public function formError(){
        $this->form_validation->set_error_delimiters('','');
        $error = validation_errors();
        return str_replace("\n",'', $error);
    }
}

