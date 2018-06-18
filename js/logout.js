function logout()
{
	$(document).ready(function(){
					
					$.ajax({
						url: "phpFiles/logout.php",// give your url
						type: "GET",
						dataType: 'json',
						processData: false,
						contentType: false,
						success: function (response) 
						{
							
							window.open("login.html", "_self")
							
						}
						});
				});
}