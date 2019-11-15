<?php 
defined('BASEPATH') OR exit('No direct script access allowed');

class Members extends CI_Model{
    public $table = 'members';
    /**Load Database */
    public function __construct(){
        parent::__construct();
        $this->load->database();
    }

    /**Find UserLogin */
    public function find_by_username($username){
        return $this->db->get_where($this->table, ['mem_username' => $username])->row();
    }

}