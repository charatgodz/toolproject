<?php
defined('BASEPATH') or exit('No direct script access allowed');

class API_Controller extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        if (!empty($this->inputJSON())) $_POST = $this->inputJSON();
    }
    public $User;

    public function authentication()
    {
        $this->User = null;
        if (isset($_SERVER['HTTP_AUTHORIZATION']) && !empty($_SERVER['HTTP_AUTHORIZATION'])) {
            $authorizationToken =  str_replace('Bearer ','', trim($_SERVER['HTTP_AUTHORIZATION']));
            $this->User = $this->access_token_jwt->verifyToken($authorizationToken);
            return;
        }
        response_json([
            'message' => 'Unauthorized'
        ], 401);
        exit();
    }

    public function json($data, $status = 200)
    {
        return  $this->output
            ->set_status_header($status)
            ->set_content_type('application/json')
            ->set_output(json_encode($data));
    }

    public function inputJSON($requestKey = null)
    {
        $json = file_get_contents('php://input');
        $decodeArray = (array) json_decode($json);
        if ($requestKey) return @$decodeArray[$requestKey];
        return $decodeArray;
    }

    public function formError()
    {
        $this->form_validation->set_error_delimiters('', '');
        $error = validation_errors();
        return str_replace("\n", '', $error);
    }
}
