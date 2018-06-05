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
									+'      <button type="button" class="btn btn-xs btn-primary" onclick="gethistory(\''+response[i].account+'\')">Check History</button>'
						            +'  </td>'
									+'	</tr>';
									
						
					}
					document.getElementById("table_body").innerHTML = innerhtml;
              
            }
        });
 	});

}



function gethistory(query)
{
	var formData = new FormData();
    formData.append("account", query);
	formData.append("exact", 1);
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

            		if(response[0].pay_hist.length == 1)
            		{
            			document.getElementById("hist_body").innerHTML = '<tr><td colspan="2"><center>No Payment History</center</td></tr>';
            			return;
            		}

            		for(var i=0;i < response[0].pay_hist.length-1;i++)
            		{
            			innerhtml += '<tr><td>'+response[0].pay_hist[i].date+'</td><td>'+response[0].pay_hist[i].amount+'</td></tr>'
            		}

            		document.getElementById("hist_body").innerHTML = innerhtml;
            }
        });
 	});
}
