<?php 
session_start();
$_SESSION['usertoken'] = "";

session_unset(); 

session_destroy(); 
echo '{"error":0}';
?>