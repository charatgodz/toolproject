<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Employee extends API_Controller
{

    public function get_employees()
    {
        $this->form_validation->set_rules('company_id', 'company_id', 'required');

        if ($this->form_validation->run() == FALSE)
            return $this->json(['message' => $this->formError()], 400);
        return $this->json($this->employees->find_by_employee_id($this->input->post('company_id')));
    }
}
