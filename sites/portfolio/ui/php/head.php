<?php
/* Base Includes */
require('ui/php/session.php');

/* PRE-HEADERS */
// Remote Port
echo "<!-- User Addr: $_SERVER[REMOTE_ADDR]:$_SERVER[REMOTE_PORT] -->\n";
	
/* HEADERS */
// Beta/Index Header
echo"
<!DOCTYPE html>
<head>
	<title>Portfolio - Nachfolger, LLC</title>
	<link rel='stylesheet' type='text/css' href='/sites/portfolio/ui/css/index.css'>
	<link rel='stylesheet' type='text/css' href='/sites/portfolio/ui/css/sweetalert.css'>
	<link rel='stylesheet' type='text/css' href='/sites/portfolio/ui/css/font-awesome.min.css'>
	<meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'>
	<link rel='shortcut icon' type='image/icon' href='/sites/portfolio/ui/images/favicon.png'/>
	<script src='/sites/portfolio/ui/js/jquery-3.1.1.min.js'></script>
	<script src='/sites/portfolio/ui/js/typed.js'></script>
	<script src='/sites/portfolio/ui/js/sweetalert.min.js'></script>
	<meta name='revisit-after' content='7 days'>
	<meta name='robots' content='index, follow'>	
</head>
\n";

?>