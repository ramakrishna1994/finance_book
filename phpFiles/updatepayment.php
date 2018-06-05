<?php 

require_once 'connection.php';

$account=mysqli_real_escape_string($con,$_POST['account']);
$date=mysqli_real_escape_string($con,$_POST['date']);
$amount=mysqli_real_escape_string($con,$_POST['amount']);

$selectquery = "select * from users where account_no='".$account."';";

$result=mysqli_query($con,$selectquery) or die(mysqli_error($con));

$error = 1;
$json = "[";
$pay_hist = "";
$finalpay_hist = "";
while($row = mysqli_fetch_array($result)){
	
	$pay_hist = $row['pay_hist'];
	
			
}
if($pay_hist == "")
{
	$finalpay_hist = $date.':'.$amount;
}
else
{
	$finalpay_hist = $pay_hist.','.$date.':'.$amount;
}
$updatequery = 'update users set pay_hist="'.$finalpay_hist.'" where account_no="'.$account.'";';
$result=mysqli_query($con,$updatequery) or die(mysqli_error($con));

$error = 0;
$json.='{"error":'.$error.'}]';


echo $json;

mysqli_close($con);
?>