<?php 

require_once 'connection.php';

$searchValue=mysqli_real_escape_string($con,$_POST['search']);
//$searchValue="asd";


$selectquery = "select * from users where name like '%".$searchValue."%' or phone like '%".$searchValue."%' or account_no like '%".$searchValue."%' order by account_no asc;";
$result=mysqli_query($con,$selectquery) or die(mysqli_error($con));

$error = 1;
$json = "[";

while($row = mysqli_fetch_array($result)){
	$error = 0;
	$json.='{';
	$json.='"account":'.$row['account_no'].',';
	$json.='"name":"'.$row['name'].'",';
	$json.='"princ_amount":'.$row['princ_amount'].',';
	$json.='"days":'.$row['days'].',';
	$json.='"daily":'.$row['daily'].',';
	$json.='"interest":'.$row['interest'];
	$json.='},';
			
}
			


$json.='{"error":'.$error.'}]';


echo $json;

mysqli_close($con);
?>