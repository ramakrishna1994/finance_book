
var url_string = window.location.href
var url = new URL(url_string);
var account = url.searchParams.get("account");
var exact = url.searchParams.get("exact");


function getuser(account,exact)
{
	var formData = new FormData();
    formData.append("account", account);
    formData.append("exact", exact);
    $('#message').html('<img src="images/loader.gif" style="height: 30px;width: 30px">');
    var innerhtml = '';

    $(document).ready(function(){
     $.ajax({
            url: "phpFiles/getuser.php",// give your url
            type: "POST",
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false,
            success: function (response) {
                   if(response[response.length-1].error == 1)
					{
							$('#message').html('<font color="red">Error in Fetching Details</font>');
							return;
					}
					for(var i=0;i<response.length-1;i++)
					{
						document.getElementById("account").innerHTML = response[i].account;
						document.getElementById("name").value = response[i].name;
						document.getElementById("days").value = response[i].days;
						document.getElementById("start_date").value =response[i].start_date;
						document.getElementById("fine_days").value = response[i].fine_days;
						document.getElementById("princ_amount").value = response[i].princ_amount;
						document.getElementById("daily").value = response[i].daily;
						document.getElementById("interest").value =response[i].interest;
						document.getElementById("fine").value =response[i].fine;
						document.getElementById("phone").value = response[i].phone;
						document.getElementById("aadhar").value =response[i].aadhar;
						document.getElementById("extras").value =response[i].extras;
						document.getElementById("address").value = response[i].address;

					}
					
					var totalsum = 0;
					if(response[0].pay_hist.length == 1)
            		{
            			//document.getElementById("hist_body").innerHTML = '<tr><td colspan="2"><center>No Payment History</center</td></tr>';
            		}
            		else
            		{
            			for(var i=0;i < response[0].pay_hist.length-1;i++)
	            		{
	            			innerhtml += '<tr><td><center>'+response[0].pay_hist[i].date+'</center></td><td><center>'+response[0].pay_hist[i].amount+'</center></td></tr>'
	            			totalsum += response[0].pay_hist[i].amount;
	            		}	
	            		//document.getElementById("hist_body").innerHTML = innerhtml;
            		}
					
            		document.getElementById("total_sum").innerHTML = totalsum;

            		$('#message').html('');
              
            }
        });
 	});

}


getuser(account,exact);



function checkfields()
{
  var name = document.getElementById("name").value;
  var princ_amount = document.getElementById("princ_amount").value;
  var start_date = document.getElementById("start_date").value;
  var days = document.getElementById("days").value;
  var interest = document.getElementById("interest").value;
  var daily = document.getElementById("daily").value;
  var fine_days = document.getElementById("fine_days").value;
  var phone = document.getElementById("phone").value;
  var aadhar = document.getElementById("aadhar").value;
  var address = document.getElementById("address").value;
  var fine = document.getElementById("fine").value;
  var extras = document.getElementById("extras").value;
  
  
  
  
  

  if(name == "")
  {
     $('#message').html('<font color="red">Please Enter Name</font>');
     return false;
  }
   if(princ_amount == "")
  {
     $('#message').html('<font color="red">Please Enter Principle Amount</font>');
     return false;
  }
  if(start_date == "")
  {
     $('#message').html('<font color="red">Please Enter Finance Start Date</font>');
     return false;
  }
  if(days == "")
  {
     $('#message').html('<font color="red">Please Enter Number of Days of Finance</font>');
     return false;
  }
   if(interest == "")
  {
     $('#message').html('<font color="red">Please Enter Interest</font>');
     return false;
  }
   if(daily == "")
  {
     $('#message').html('<font color="red">Please Enter Daily Amount to Pay</font>');
     return false;
  }
  if(fine_days == "")
  {
     $('#message').html('<font color="red">Please Enter Number of Days for Late Fine</font>');
     return false;
  }
  if(fine == "")
  {
     $('#message').html('<font color="red">Please Enter Fine Amount</font>');
     return false;
  }
   if(phone == "")
  {
     $('#message').html('<font color="red">Please Enter Phone Number</font>');
     return false;
  }
  if(aadhar == "")
  {
     $('#message').html('<font color="red">Please Enter Aadhar Number</font>');
     return false;
  }
  if(address == "")
  {
     $('#message').html('<font color="red">Please Enter Address</font>');
     return false;
  }
  if(extras == "")
  {
     $('#message').html('<font color="red">Please Enter Extras Information</font>');
     return false;
  }
  return true;

}


function updateuser()
{

  $('#message').html('<img src="images/loader.gif" style="height: 30px;width: 30px">');

  if(checkfields() == false)
  {
  	$('html, body').animate({ scrollTop: 0 }, 'fast');
    return;
  }

  var name = document.getElementById("name").value;
  var start_date = document.getElementById("start_date").value;
  var days = document.getElementById("days").value;
  var fine_days = document.getElementById("fine_days").value;
  var address = document.getElementById("address").value;
  var princ_amount = document.getElementById("princ_amount").value;
  var daily = document.getElementById("daily").value;
  var interest = document.getElementById("interest").value;
  var fine = document.getElementById("fine").value;
  var phone = document.getElementById("phone").value;
  var aadhar = document.getElementById("aadhar").value;
  var extras = document.getElementById("extras").value;
   
  var formData = new FormData();
     formData.append("name", name);
     formData.append("start_date", start_date);
     formData.append("account", account);
     formData.append("days", days);
     formData.append("fine_days", fine_days);
     formData.append("address", address);
     formData.append("princ_amount", princ_amount);
     formData.append("daily", daily);
     formData.append("interest", interest);
     formData.append("fine", fine);
     formData.append("phone", phone);
     formData.append("aadhar", aadhar);
     formData.append("extras", extras);
     //formData.append( "pic", $( '#upload' )[0].files[0] );
   
   $(document).ready(function(){
     

     $.ajax({
            url: "phpFiles/updateuser.php",// give your url
            type: "POST",
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false,
            success: function (response) {
                  if(response.error == 0)
                    {

                      $('#message').html('<font color="green">Successfully Updated User Information</font>');
                      $('html, body').animate({ scrollTop: 0 }, 'fast');
                    }
                    else
                    {
                      $('#message').html('<font color="red">Problem with Updating User Information!! Please try again</font>'); 
                      $('html, body').animate({ scrollTop: 0 }, 'fast');
                    }
              
            }
        });
 });
}
