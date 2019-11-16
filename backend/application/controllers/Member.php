<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Member extends API_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->authentication();
    }

    public function data()
    {
        unset($this->User->mem_password);
        return $this->json($this->User);
    }
}
