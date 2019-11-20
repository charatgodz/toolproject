<?php 
defined('BASEPATH') OR exit('No direct script access allowed');

class Employees extends CI_Model{
    public $table = 'employee';
    /**Load Database */
    public function __construct(){
        parent::__construct();
        $this->load->database();
    }

    /**Find UserLogin */
    public function find_by_employee_id($company_id){
        return $this->db->get_where($this->table, ['company_id' => $company_id])->row();
    }

}