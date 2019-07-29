// login
var btnSubmit = document.getElementById("Mybutton");
btnSubmit.onclick = function(e) {
  e.preventDefault();
  var test = JSON.parse(localStorage.getItem("testKey"));
  var email1 = document.getElementById("exampleInputEmail1").value;
  var pw1 = document.getElementById("exampleInputPassword1").value;
  
  // console.log(test);
  // console.log(email1 + " " + pw1);
  // console.log(test[2]["email"] + " " + test[2]["pw"]);
  var valid = false;
  for( let i = 0; i <test.length; i++){
    if (email1 == test[i]["email"] && pw1 == test[i]["pw"]) {
      valid = true; 
    }
  }

  if(valid == true){
    localStorage.setItem("username", email1);
    var change = localStorage.getItem("username");
    var login = document.getElementById("log");
    
    window.location.href = "page.html";
  }else{
    alert('email or password incorrect');
  }  
};


// sign up redirect
var btnSignup = document.getElementById("Signup");
btnSignup.onclick = function(e) {
    e.preventDefault();
    window.location.href = "signup.html";
};