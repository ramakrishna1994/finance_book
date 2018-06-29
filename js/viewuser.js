
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
							$('html, body').animate({ scrollTop: 0 }, 'fast');
							return;
					}
					for(var i=0;i<response.length-1;i++)
					{
						document.getElementById("account").innerHTML = "<center>"+response[i].account+"</center>";
						document.getElementById("name").innerHTML = "<center>"+response[i].name+"</center>";
						document.getElementById("days").innerHTML = "<center>"+response[i].days+"</center>";
						document.getElementById("start_date").innerHTML = "<center>"+response[i].start_date+"</center>";
						document.getElementById("fine_days").innerHTML = "<center>"+response[i].fine_days+"</center>";
						document.getElementById("address").innerHTML = "<center>"+response[i].address+"</center>";
						document.getElementById("princ_amount").innerHTML = "<center>"+response[i].princ_amount+"</center>";
						document.getElementById("daily").innerHTML = "<center>"+response[i].daily+"</center>";
						document.getElementById("interest").innerHTML = "<center>"+response[i].interest+"</center>";
						document.getElementById("fine").innerHTML = "<center>"+response[i].fine+"</center>";
						document.getElementById("phone").innerHTML = "<center>"+response[i].phone+"</center>";
						document.getElementById("aadhar").innerHTML = "<center>"+response[i].aadhar+"</center>";
						document.getElementById("extras").innerHTML = "<center>"+response[i].extras+"</center>";

					}
					var totalsum = 0;
					if(response[0].pay_hist.length == 1)
            		{
            			document.getElementById("hist_body").innerHTML = '<tr><td colspan="2"><center>No Payment History</center</td></tr>';
            		}
            		else
            		{
            			for(var i=0;i < response[0].pay_hist.length-1;i++)
	            		{
	            			innerhtml += '<tr><td><center>'+response[0].pay_hist[i].date+'</center></td><td><center>'+response[0].pay_hist[i].amount+'</center></td></tr>'
	            			totalsum += response[0].pay_hist[i].amount;
	            		}	
	            		document.getElementById("hist_body").innerHTML = innerhtml;
            		}
					
            		document.getElementById("total_sum").innerHTML = "<center>"+totalsum+"</center>";
            		$('#message').html('');
              
            }
        });
 	});

}


getuser(account,exact);