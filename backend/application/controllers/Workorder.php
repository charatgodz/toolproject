<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Workorder extends API_Controller{
    public function __construct()
    {
        parent::__construct();
    }

    public function get_workorder(){
        return $this->json($this->workorders->get_work());
    }
}