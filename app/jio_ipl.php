<?php

include('_jio_ipl_configs.php');

if(isset($ALLOW_CROSS_DOMAIN_STREAMING))
{
    if($ALLOW_CROSS_DOMAIN_STREAMING == "yes")
    {
        header("Access-Control-Allow-origin: *");
    }
}

$id = ""; $rwLink = "";
$strmrlink = ""; $pm3u = "";

if(isset($_REQUEST['id']))
{
    $id = $_REQUEST['id'];
}

if(empty($id))
{
    exit('Channel ID Missing');
}

foreach($CHANNEL_LIST as $chnm)
{
    if($id == $chnm['id'])
    {
        $rwLink = $chnm['link'];
    }
}
//echo $rwLink;

if(empty($rwLink))
{
    exit('Channel ID Invalid');
}

$streamHeads = array('User-Agent: '.$RDC_USERAGENT);


    $streamLink = $rwLink.''.$RDC_TOKEN;
   // echo $streamLink;
header("Location: ".$streamLink);