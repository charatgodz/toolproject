<?php

interface IAccessToken{
    public function generateExp($minute);
    public function generateAccessToken($mem_id);
    public function verifyToken($token);
}