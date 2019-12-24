<?php
// Start Session
if (session_status() == PHP_SESSION_NONE) {
	activate_session();
	$session_stat = '&#8730;';
	$session_stat_icon = 'fa-user-secret';
} else {
	$session_stat = '&#215;';
	$session_stat_icon = 'fa-ban';
}

// Session Control
function activate_session() {
	// Session Params
	session_name("Nachfolger");
	session_start();
	// Session Variables
	$_SESSION['ip'] = $_SERVER['REMOTE_ADDR'];
	$_SESSION['geo'] = $_SERVER["HTTP_CF_IPCOUNTRY"];
	$_SESSION['ref'] = $_SERVER['HTTP_REFERER'];
}

// Do Not Track
if ($_HEADER['Dnt'] == 0) {
	$_SESSION['Dnt'] = 'False';
} elseif ($_HEADER['Dnt'] == 1) {
	$_SESSION['Dnt'] = 'True';
} else {
	$_SESSION['Dnt'] = '0';
}
?>