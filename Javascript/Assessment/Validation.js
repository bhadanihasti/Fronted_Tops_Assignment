function validateForm(form)
{
   var plantName = document.getElementById("plantName").value;
   var Email = document.getElementById("Email").value;
  var plantNamePattern = /^[A-Za-z]{3,}$/;
  var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!plantName.match(plantNamePattern)) {
    alert("Plant name must contain only letters and minimum 3 characters");
    return false;
  }
  if (!Email.match(emailPattern)) {
    alert("Please Enter Valid Email Formate ");
    return false;
  } 

  return true;
}
