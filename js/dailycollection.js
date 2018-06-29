
function getDailyCollection()
{
	var date = document.getElementById("date").value;
	if(date == "")
	{
		$('#message').html('<font color="red">Please Enter Date in DD-MM-YYYY Format</font>');
		return;
	}
	var formData = new FormData();
    formData.append("date", date);
    $('#message').html('<img src="images/loader.gif" style="height: 30px;width: 30px">');
    var innerhtml = '';

    $(document).ready(function(){
     $.ajax({
            url: "phpFiles/dailycollection.php",// give your url
            type: "POST",
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false,
            success: function (response) {
                   if(response[response.length-1].error == 1)
					{
						document.getElementById("hist_body").innerHTML = '<tr><td colspan="3"><center><font color="red">No Payment History</font></center</td></tr>';
            			document.getElementById("totalsum").value = 0;
            			$('#message').html('');
            			return;
					}

					var totalsum = 0;
					
					for(var i=0;i<response.length-1;i++)
					{
						var ano = response[i].account;
						var na = response[i].name;
						var amt = response[i].pay_hist[0].amount;
						innerhtml += '<tr><td><center>'+ano+'</center></td><td><center>'+na+'</center></td><td><center>'+amt+'</center></td></tr>'
						totalsum += amt;

					}
					
					document.getElementById("hist_body").innerHTML = innerhtml;
            		document.getElementById("totalsum").value = totalsum;
            		$('#message').html('');
              
            }
        });
 	});

}
