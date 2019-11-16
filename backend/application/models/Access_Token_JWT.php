<?php

use \Firebase\JWT\JWT;


defined('BASEPATH') or exit('No direct script access allowed');
require_once APPPATH . 'interfaces/IAccess_Token.php';


class Access_Token_JWT extends CI_Model implements IAccessToken
{

    private $accessKey = "Tool_management";

    /**Set Expiration */
    public function generateExp($minute = 30)
    {
        return time() + $minute * 60;
    }
    /**Create JWT */
    public function generateAccessToken($mem_username)
    {
        $payload = [
            'mem_username' => $mem_username,
            'exp' => $this->generateExp()
        ];
        $token = JWT::encode($payload, $this->accessKey);
        return [
            'JWT Endcode' => $token,
            'JWT Decode' =>  JWT::decode($token, $this->accessKey, ['HS256'])
        ];
    }

    public function verifyToken($token)
    {
        try{
            $payload = JWT::decode($token, $this->accessKey, ['HS256']);
            if(empty($payload)) return null;
            return $this->members->find_by_username($payload->mem_username);
        }
        catch(Exception $ex){
            return null;
        }
  
    }
}
