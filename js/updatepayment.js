function getDate()
{
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!

	var yyyy = today.getFullYear();
	if(dd<10){
	    dd='0'+dd;
	} 
	if(mm<10){
	    mm='0'+mm;
	} 
	var today = dd+'-'+mm+'-'+yyyy;
	return  today;
}

function getuser()
{
	var query = document.getElementById('search').value;
	var formData = new FormData();
    formData.append("account", query);
    formData.append("exact", 0);
    $('#table_body').html('<center><img src="images/loader.gif" style="height: 30px;width: 30px"></center>');
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
							document.getElementById("table_body").innerHTML = '<tr><td colspan="3" style="color:red"><center>No Results Found</center></td></tr>';
							return;
					}
					for(var i=0;i<response.length-1;i++)
					{
						innerhtml += '	<tr >'
									+'	<td>'+response[i].account+'</td>'
									+'	<td>'+response[i].name+'</td>'
									+'  <td>'
									+'      <button type="button" class="btn btn-xs btn-primary" onclick="getdetails(\''+response[i].account+'\')">Update Payment</button>'
						            +'  </td>'
									+'	</tr>';
									
						
					}
					document.getElementById("table_body").innerHTML = innerhtml;
              
            }
        });
 	});

}




function getdetails(query)
{
	var formData = new FormData();
    formData.append("account", query);
	formData.append("exact", 1);

    $(document).ready(function(){
     $.ajax({
            url: "phpFiles/getuser.php",// give your url
            type: "POST",
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false,
            success: function (response) {
                   document.getElementById("name").innerHTML = response[0].name;
                   document.getElementById("account").innerHTML = response[0].account;
                   document.getElementById("princ_amount").innerHTML = response[0].princ_amount;
                   document.getElementById("daily").innerHTML = response[0].daily;
                   if(response[0].pay_hist[0].date != "dummy")
                   {
                   		document.getElementById("last_date").innerHTML = response[0].pay_hist[response[0].pay_hist.length-2].date;
                   		document.getElementById("last_paid").innerHTML = response[0].pay_hist[response[0].pay_hist.length-2].amount;
                   }
                   else
                   {
                   		document.getElementById("last_date").innerHTML = "Nil";
                   		document.getElementById("last_paid").innerHTML = "Nil"
                   }
                   document.getElementById("today_date").value = getDate();
         
              
            }
        });
 	});
}



function updatepayment()
{
	var formData = new FormData();
    formData.append("account", document.getElementById("account").innerHTML);
	formData.append("date", document.getElementById("today_date").value);
	formData.append("amount", document.getElementById("actual_amount").value);	

	$(document).ready(function(){
     $.ajax({
            url: "phpFiles/updatepayment.php",// give your url
            type: "POST",
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false,
            success: function (response) {
                alert('Successfully Updated Payment');
                getdetails(document.getElementById("account").innerHTML);
                document.getElementById("actual_amount").value = "";
                document.getElementById("today_date").value = "";
              
            }
        });
 	});
}
