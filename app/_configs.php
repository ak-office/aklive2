<?php

$ALLOW_CROSS_DOMAIN_STREAMING = "yes"; //Possible Values - "yes" or "no"
$ENABLE_CROSS_DOMAIN_REQUEST = "yes"; //Possible Values - "yes" or "no"
$RDC_USERAGENT = "https://www.jiocinema.com/sports"; // useragent is changeable
$RDC_TOKEN = ".m3u8"; // token is also changeable

$CHANNEL_LIST = array();

if(file_exists('_data/channels'))
{
    $heck = @file_get_contents('_data/channels');
    if(!empty($heck))
    {
        $beck = @json_decode($heck, true);
        if(!empty($beck))
        {
            $CHANNEL_LIST = $beck;
        }
    }
}

function exptoken()
{
    return time() + 1200;
}

function response($status, $code, $message, $data)
{
    if(isset($ENABLE_CROSS_DOMAIN_REQUEST))
    {
        if($ENABLE_CROSS_DOMAIN_REQUEST == "yes")
        {
            header("Access-Control-Allow-Origin: *");
        }
    }
    header("Content-Type: application/json");
    if($status == "success" || $status == "error")
    {
        if($status == "error")
        {
            $data = array();
        }
        $outro = array('status' => $status, 'code' => $code, 'message' => $message, 'data' => $data);
        exit(json_encode($outro));
    }
    else
    {
        http_response_code(500);
        exit('Fatal Error');
    }
}


?>