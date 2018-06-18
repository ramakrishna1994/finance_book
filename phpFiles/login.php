<?php 
require_once 'connection.php';
session_start();

$username = mysqli_real_escape_string($con,$_POST['username']);
$password = mysqli_real_escape_string($con,$_POST['password']);


$selectQuery = "select count(*) from login where username='".$username."' and password='".$password."';";

$result=mysqli_query($con,$selectQuery) or die(mysqli_error($con));
$error = 1;

while($row = mysqli_fetch_array($result))
{
	if($row[0] == 1)
	{
		$_SESSION['usertoken'] = "set";
		$error = 0;	
	}
}

echo '{"error":"'.$error.'"}';	
?>
