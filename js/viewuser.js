
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
						document.getElementById("account").value = response[i].account;
						document.getElementById("name").value = response[i].name;
						document.getElementById("days").value = response[i].days;
						document.getElementById("fine_days").value = response[i].fine_days;
						document.getElementById("address").value = response[i].address;
						document.getElementById("princ_amount").value = response[i].princ_amount;
						document.getElementById("daily").value = response[i].daily;
						document.getElementById("interest").value = response[i].interest;
						document.getElementById("fine").value = response[i].fine;
						document.getElementById("phone").value = response[i].phone;
						document.getElementById("aadhar").value = response[i].aadhar;
						document.getElementById("extras").value = response[i].extras;
					}
					$('#message').html('');
              
            }
        });
 	});

}


getuser(account,exact);