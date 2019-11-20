<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Tool extends API_Controller{
    public function __construct()
    {
        parent::__construct();
    }

    public function get_tools(){
        return $this->json($this->tools->get_all_tools());
    }
}