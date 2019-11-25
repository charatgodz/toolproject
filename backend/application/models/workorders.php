<?php 
defined('BASEPATH') OR exit('No direct script access allowed');

class Workorders extends CI_Model{
    public $table = 'ac';
    /**Load Database */
    public function __construct(){
        parent::__construct();
        $this->load->database();
    }

    /**Find UserLogin */
    public function get_work(){
        return $this->db->get($this->table)->result();
    }

}