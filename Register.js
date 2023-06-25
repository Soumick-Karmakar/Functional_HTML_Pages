document.getElementById("signin").onclick = function() {
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var re_password = document.getElementById("re-password").value

    if( name ===""){
        alert("Enter your username")
    }
    else if ( email ===""){
        alert("Enter your email")
    }
    else if ( password ===""){
        alert("Enter your password")
    }
    else if ( re_password ===""){
        alert("Enter your re_password")
    }
    else {
        location.href="http://127.0.0.1:5500/RegistrationPage/Registered.html"
    }
}
    
