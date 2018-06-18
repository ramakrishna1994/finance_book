<?php 
require_once 'connection.php';


$name = mysqli_real_escape_string($con,$_POST['name']);
$start_date = mysqli_real_escape_string($con,$_POST['start_date']);
$account = mysqli_real_escape_string($con,$_POST['account']);
$days = mysqli_real_escape_string($con,$_POST['days']);
$fine_days = mysqli_real_escape_string($con,$_POST['fine_days']);
$address = mysqli_real_escape_string($con,$_POST['address']);
$princ_amount = mysqli_real_escape_string($con,$_POST['princ_amount']);
$daily = mysqli_real_escape_string($con,$_POST['daily']);
$interest = mysqli_real_escape_string($con,$_POST['interest']);
$fine = mysqli_real_escape_string($con,$_POST['fine']);
$phone = mysqli_real_escape_string($con,$_POST['phone']);
$aadhar = mysqli_real_escape_string($con,$_POST['aadhar']);
$extras = mysqli_real_escape_string($con,$_POST['extras']);


$insertQuery = "insert into users(account_no,start_date,name,days,fine_days,address,princ_amount,daily,interest,fine,phone,aadhar,extras) values('".$account."','".$start_date."','".$name."',".$days.",".$fine_days.",'".$address."',".$princ_amount.",".$daily.",".$interest.",".$fine.",'".$phone."','".$aadhar."','".$extras."');";



mysqli_query($con,$insertQuery) or die(mysqli_error($con));
$error = 0;

/*

if(isset($_FILES['pic']))
{
$target_dir = "../profilePictures/";
$target_file = $target_dir . basename($_FILES["pic"]["name"]);
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);

$temp = explode(".", $_FILES["pic"]["name"]);
$newfilename = $name . '.' . end($temp);

// Check if image file is a actual image or fake image

	$check = getimagesize($_FILES["pic"]["tmp_name"]);
	if($check != false) {
		//echo "File is an image - " . $check["mime"] . ".";
		$uploadOk = 1;
	} else {
		//echo "File is not an image.";
		$error = 1;
		$uploadOk = 0;
	}


// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "JPG" && $imageFileType != "PNG" && $imageFileType != "JPEG") {
			//echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
			$uploadOk = 0;
			$error = 3;
		}
		// Check if $uploadOk is set to 0 by an error
		if ($uploadOk == 0) {
			//echo "Sorry, your file was not uploaded.";
			// if everything is ok, try to upload file
		} else {
			if (move_uploaded_file($_FILES["pic"]["tmp_name"], "../profilePictures/" . $newfilename)) {
				
				$error = 0;
				$updateQuery = "update users set pic = '".$newfilename."' where emailid = '".$_SESSION['gateusername']."';";		
				mysqli_query($con,$updateQuery);
				$_SESSION['gateimage'] = $newfilename;
			} else {
				//echo "Sorry, there was an error uploading your file.";
			}
		}
}
	
	
	*/
	echo '{"error":"'.$error.'"}';	
?>
