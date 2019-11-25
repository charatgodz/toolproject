<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Loantool extends API_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->authentication();
    }

    public function create_loan_header()
    {
        $this->form_validation->set_rules('eng_id', 'eng_id', 'required');
        $this->form_validation->set_rules('ac_reg', 'ac_reg', 'required');


        if ($this->form_validation->run() == FALSE) {
            return $this->json(['message' => $this->formError()], 400);
        } else {
            $model = $this->input->post();
            $model['store_id'] = $this->User->company_id;
            $created = $this->loantools->insert_header($model);
            return $this->json([
                'message' => $created
            ]); 
        }
    }
}
