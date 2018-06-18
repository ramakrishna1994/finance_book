<?php 
require_once 'connection.php';


$id = mysqli_real_escape_string($con,$_POST['name']);

$insertQuery = "insert into deleted_users select * from users where account_no='".$id."';";

mysqli_query($con,$insertQuery) or die(mysqli_error($con));

$deleteQuery = "delete from users where account_no='".$id."';";

mysqli_query($con,$insertQuery) or die(mysqli_error($con));

$error = 0;

echo '{"error":"'.$error.'"}';	

?>
