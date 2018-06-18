
function checkfields()
{
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;


  if(username == "")
  {
     $('#message').html('<font color="red">Please Enter Username</font>');
     return false;
  }
  if(password == "")
  {
     $('#message').html('<font color="red">Please Enter Password</font>');
     return false;
  }
  return true;

}

function login()
{

  $('#message').html('<img src="images/loader.gif" style="height: 30px;width: 30px">');

  if(checkfields() == false)
  {
    return;
  }

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
   
  var formData = new FormData();
     formData.append("username", username);
     formData.append("password", password);
     
   $(document).ready(function(){
     

     $.ajax({
            url: "phpFiles/login.php",// give your url
            type: "POST",
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false,
            success: function (response) {
                  if(response.error == 0)
                    {
                      $('#message').html('<font color="green">Success</font>');
                    }
                    else
                    {
                      $('#message').html('<font color="red">Username or Password is Incorrect</font>'); 
                    }
              
            }
        });
 });
}