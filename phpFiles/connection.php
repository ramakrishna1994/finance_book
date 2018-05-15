<?php 
$db_host="localhost";
$db_user="finance";
$db_password="finance";
$db_name="finance";
$con=mysqli_connect($db_host,$db_user,$db_password);
mysqli_select_db($con,$db_name) or die(mysqli_error($con));
?>