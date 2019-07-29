var btnSearch = document.getElementById("btn_search");
// btnSearch.addEventListener("click", function(e) {
//     console.log(e);
// });

function search() {
    console.log("Searched");
};


// show user info

if(localStorage.getItem("username") != null){
  let username = localStorage.getItem("username").split('@')[0];
  document.getElementById("user-info").innerHTML = `HI! ${username} || Logout`;
  document.getElementById("log").style.display = 'none';
  document.getElementById("user-info").style.display = 'block';
}else{
  document.getElementById("log").style.display = 'block';
  document.getElementById("user-info").style.display = 'none';
}

function logout(){
  localStorage.removeItem('username');
  document.getElementById("log").style.display = 'block';
  document.getElementById("user-info").style.display = 'none';
};


function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
};

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

