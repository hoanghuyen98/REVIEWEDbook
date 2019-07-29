function formSubmit(event){
    event.preventDefault();
    var email = document.getElementById('Email').value;
    var pw = document.getElementById('Pw').value;
    var pw2 = document.getElementById('Pw2').value;
    
    if(pw == pw2) {
    // var value = [email, pw, pw2]
    
        let testKey = localStorage.getItem("testKey")
        if(testKey == null ){
            var data = [];
            localStorage.setItem("testKey", JSON.stringify(data));
        }

        var newData = {
            'email':email,
            'pw': pw,
            'pw2': pw2,
        }

        var test = JSON.parse(localStorage.getItem("testKey"));
        test.push(newData)
        localStorage.setItem("testKey", JSON.stringify(test));
        // console.log(test.length);
        alert("Sign up successfully");
        window.location.href = "home.html";

    }
    else {
        alert("Your password and confirmation password are not the same!");
    }
}