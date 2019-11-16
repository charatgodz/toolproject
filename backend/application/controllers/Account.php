<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Account extends API_Controller
{



    public function login()
    {

        $this->form_validation->set_rules('username', 'Username', 'required');
        $this->form_validation->set_rules('password', 'Password', 'required');

        if ($this->form_validation->run() == FALSE)
            return $this->json(['message' => $this->formError()], 400);

            /**Verified Username and Password with out hast */
        $memberItem = $this->members->find_by_username($this->input->post('username'));
        if (!empty($memberItem) && $this->input->post('password') == $memberItem->mem_password) {
            $accessToken =  $this->access_token_jwt->generateAccessToken($memberItem->mem_username);
            return $this->json([
                'accessToken' => $accessToken
            ]);
        }
        return $this->json(['message' => 'Username and Password Invalid'], 400);
    }
}
