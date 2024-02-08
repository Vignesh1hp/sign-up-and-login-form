function validateForm(){
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var gender = document.querySelector('input[name="gender"]:checked');


  if(fname === '' || lname === '' || email === '' || password === ''){
      alert('Please fill in all required fields.');
  }
  else{
      alert('Form submitted successfully!');
  }
}