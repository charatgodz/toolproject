<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Tool extends API_Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function get_tools()
    {
        return $this->json($this->tools->get_all_tools());
    }

    public function create_loan_header()
    {
        $this->form_validation->set_rules('eng_id', 'eng_id', 'required');
        $this->form_validation->set_rules('aircraft', 'aircraft', 'required');


        if ($this->form_validation->run() == FALSE) {
            return $this->json(['message' => $this->formError()], 400);
        } else {
            $created = $this->insert_header($this->input->post());
            return $this->json([
                'message' => $created
            ]);
        }
    }

    public function checkTool()
    {
        $this->form_validation->set_data($_GET);
        $this->form_validation->set_rules('batch', 'batch', 'required');

        if ($this->form_validation->run() == FALSE)
            return $this->json(['message' => $this->formError()], 400);
        return $this->json($this->tools->find_by_batch($_GET['batch']));
    }
}
