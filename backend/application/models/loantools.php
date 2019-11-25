<?php

defined('BASEPATH') or exit('No direct script access allowed');

class Loantools extends CI_Model
{
    public $table_header = 'borrow_header';
    /**Load Database */
    public function __construct()
    {
        parent::__construct();
        $this->load->database();
    }

    public function insert_header($data)
    {
        $created = $this->db->insert($this->table_header, $data);
        if (!$created) return null;
        return $this->db->insert_id();
    }
}
