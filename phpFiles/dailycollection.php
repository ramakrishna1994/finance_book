<?php 

require_once 'connection.php';

$date=mysqli_real_escape_string($con,$_POST['date']);

$selectquery = "select * from users where pay_hist like '%".$date."%';";

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
					if($paiddate == $date)
					{
						$paidjson.= '{';
						$paidjson.='"date":"'.$paiddate.'",';
						$paidjson.='"amount":'.$paidamount.'';
						$paidjson.='},';	
					} 
					
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
	/*
	$json.='"days":'.$row['days'].',';
	$json.='"start_date":"'.$row['start_date'].'",';
	$json.='"fine_days":'.$row['fine_days'].',';
	$json.='"address":"'.$row['address'].'",';
	$json.='"princ_amount":'.$row['princ_amount'].',';
	$json.='"daily":'.$row['daily'].',';
	$json.='"interest":'.$row['interest'].',';
	$json.='"fine":'.$row['fine'].',';
	$json.='"phone":"'.$row['phone'].'",';
	$json.='"extras":"'.$row['extras'].'",';
	$json.='"aadhar":"'.$row['aadhar'].'",';
	*/
	
	$json.='"pay_hist":'.$paidjson;
	$json.='},';
			
}
			


$json.='{"error":'.$error.'}]';


echo $json;

mysqli_close($con);
?>