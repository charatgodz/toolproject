<?php

function response_json($data, $status = 200){
    set_status_header($status);
    header('content-type: application/json');
    $data = str_replace('<p>','',$data);
    $data = str_replace('</p>','',$data);
    exit(json_encode($data));
}