function readURL(input) {

  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $('#pic').attr('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
}

$("#upload").change(function() {
  readURL(this);
});


function checkfields()
{
   var name = document.getElementById("name").value;
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

  if(name == "")
  {
     $('#message').html('<font color="red">Please Enter Name</font>');
     return false;
  }
  if(days == "")
  {
     $('#message').html('<font color="red">Please Enter Number of Days of Finance</font>');
     return false;
  }
  if(fine_days == "")
  {
     $('#message').html('<font color="red">Please Enter Number of Days for Late Fine</font>');
     return false;
  }
  if(address == "")
  {
     $('#message').html('<font color="red">Please Enter Address</font>');
     return false;
  }
  if(princ_amount == "")
  {
     $('#message').html('<font color="red">Please Enter Principle Amount</font>');
     return false;
  }
  if(daily == "")
  {
     $('#message').html('<font color="red">Please Enter Daily Amount to Pay</font>');
     return false;
  }
  if(interest == "")
  {
     $('#message').html('<font color="red">Please Enter Interest</font>');
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
  if(extras == "")
  {
     $('#message').html('<font color="red">Please Enter Extras Information</font>');
     return false;
  }
  return true;

}

function adduser()
{

  $('#message').html('<img src="images/loader.gif" style="height: 30px;width: 30px">');

  if(checkfields() == false)
  {
    return;
  }

  var name = document.getElementById("name").value;
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
            url: "phpFiles/adduser.php",// give your url
            type: "POST",
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false,
            success: function (response) {
                  if(response.error == 0)
                    {
                      $('#message').html('<font color="green">Successfully Added New User Information</font>');
                    }
              
            }
        });
 });
}