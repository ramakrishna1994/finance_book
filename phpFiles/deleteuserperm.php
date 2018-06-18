<?php 
require_once 'connection.php';


$id = mysqli_real_escape_string($con,$_POST['id']);


$deleteQuery = "delete from users where account_no='".$id."';";

mysqli_query($con,$insertQuery) or die(mysqli_error($con));

$error = 0;

echo '{"error":"'.$error.'"}';	

?>
