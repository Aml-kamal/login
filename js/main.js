
var emailId = document.getElementById("emailId");
var passwordId = document.getElementById("passwordId");
var signUpName = document.querySelector("#signupname");
var signUpEmail = document.querySelector("#signupemail");
var signUpPassword = document.querySelector("#signuppassword");

var user = [];
if (localStorage.getItem("user") !== null) {
    user = JSON.parse(localStorage.getItem("user"));
} else {
    user = [];
}



function signIn() {
    if (emailId.value == "" || passwordId.value == "") {
        document.getElementById("empty").innerHTML = '<span class="text-danger text-center">All inputs is required</span>'
    }

else{
    for (var i = 0; i < user.length; i++) {
        if (user[i].email.toLowerCase() == emailId.Value.toLowerCase() && user[i].password.toLowerCase() == passwordId.Value.toLowerCase()) {
            localStorage.setItem("user", user[i].name)


        } else {
            document.getElementById('empty').innerHTML = '<span class="p-3 text-danger">incorrect email or password</span>'
        }
    }
}
}


function add() {
    if (signUpName.value == '' || signUpEmail.value == '' || signUpPassword.value == '') {
        document.getElementById('isempty').innerHTML = `<p class = 'text-center text-danger'>All inputs is required</p>`
    } else {
        var users = {
            name: signUpName.value,
            email: signUpEmail.value,
            password: signUpPassword.value
        }
        user.push(users);
        localStorage.setItem('user', JSON.stringify(user));
        document.getElementById('isempty').innerHTML = '<p class="text-success text-center">Success</p>'

    }
}
