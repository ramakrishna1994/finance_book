function getusers()
{
	var search = document.getElementById("search").value;
	var formData = new FormData();
    formData.append("search", search);
    document.getElementById("table_body").innerHTML = '<center><img src="images/loader.gif" style="width:30%;height:30%"></center>0';
    var innerhtml = '';

    $(document).ready(function(){
     $.ajax({
            url: "phpFiles/listusers.php",// give your url
            type: "POST",
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false,
            success: function (response) {
                   if(response[response.length-1].error == 1)
					{
							document.getElementById("table_body").innerHTML = '<tr><td colspan="7" style="color:red"><center>No Results Found</center></td></tr>';
							return;
					}
					for(var i=0;i<response.length-1;i++)
					{
						innerhtml += '	<tr >'
									+'	<td>'+response[i].account+'</td>'
									+'	<td>'+response[i].name+'</td>'
									+'	<td>'+response[i].princ_amount+'</td>'
									+'	<td>'+response[i].days+'</td>'
									+'	<td>'+response[i].daily+'</td>'
									+'	<td>'+response[i].interest+'</td>'
									+' <td>'
						            +'      <div class="btn-group">'
						            +'        <button type="button" class="btn btn-xs btn-primary dropdown-toggle" data-toggle="dropdown">'
						            +'        more <span class="caret"></span></button>'
						            +'        <ul class="dropdown-menu" role="menu">'
						            +'          <li><a href="viewuser.html?account='+response[i].account+'&exact=1">View</a></li>'
						            +'          <li><a href="#">Edit</a></li>'
						            +'          <li><a href="#">Delete</a></li>'
						            +'        </ul>'
						            +'      </div>'
						            +'  </td>'
									+'	</tr>';
									
						
					}
					document.getElementById("table_body").innerHTML = innerhtml;
              
            }
        });
 	});

}


getusers();