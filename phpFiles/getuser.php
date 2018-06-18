<?php 

require_once 'connection.php';

$account=mysqli_real_escape_string($con,$_POST['account']);
$exact=mysqli_real_escape_string($con,$_POST['exact']);
//$searchValue="asd";

if ($exact == 0)
	$selectquery = "select * from users where account_no like '%".$account."%' or name like '%".$account."%';";
else
	$selectquery = "select * from users where account_no='".$account."';";

$result=mysqli_query($con,$selectquery) or die(mysqli_error($con));

$error = 1;
$json = "[";

while($row = mysqli_fetch_array($result)){

	$pay_hist = $row['pay_hist'];
	$paidjson = '[';
	if($pay_hist != "")
	{
				$paidArray = explode(',', $pay_hist);
				for($i=0;$i<sizeof($paidArray);$i++)
				{
					$paiddate = explode(':', $paidArray[$i])[0];
					$paidamount = explode(':', $paidArray[$i])[1]; 
					$paidjson.= '{';
					$paidjson.='"date":"'.$paiddate.'",';
					$paidjson.='"amount":'.$paidamount.'';
					$paidjson.='},';
				}
	}
	
	$paidjson.= '{';
	$paidjson.='"date":"dummy",';
	$paidjson.='"amount":"dummy"';
	$paidjson.='}]';

	$error = 0;
	$json.='{';
	$json.='"account":'.$row['account_no'].',';
	$json.='"name":"'.$row['name'].'",';
	$json.='"days":'.$row['days'].',';
	$json.='"start_date":"'.$row['start_date'].'",';
	$json.='"fine_days":'.$row['fine_days'].',';
	$json.='"address":"'.$row['address'].'",';
	$json.='"princ_amount":'.$row['princ_amount'].',';
	$json.='"daily":'.$row['daily'].',';
	$json.='"interest":'.$row['interest'].',';
	$json.='"phone":"'.$row['phone'].'",';
	$json.='"extras":"'.$row['extras'].'",';
	$json.='"aadhar":"'.$row['aadhar'].'",';
	$json.='"pay_hist":'.$paidjson;
	$json.='},';
			
}
			


$json.='{"error":'.$error.'}]';


echo $json;

mysqli_close($con);
?>