<?php 
defined('BASEPATH') OR exit('No direct script access allowed');

class Tools extends CI_Model{
    public $table = 'inventory_tb';
    /**Load Database */
    public function __construct(){
        parent::__construct();
        $this->load->database();
    }

    /**Find UserLogin */
    public function get_all_tools(){
        return $this->db->get($this->table)->result();
    }

    public function find_by_batch($batch){
        return $this->db->get_where($this->table, ['batch' => $batch])->result();

    }

}