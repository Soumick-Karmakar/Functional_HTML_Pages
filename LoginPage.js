document.getElementById("login").onclick = function() {
	var name = document.getElementById("name").value;
	var password = document.getElementById("password").value;
	if (name === ''){
		alert('Please enter your username');
	}
	else if (password ===''){
		alert('Please enter your password');
	}
	else {
		location.href="http://127.0.0.1:5500/LoginPage/LoggedIn.html"
	}
	
}

document.getElementById("register").onclick = function() {
	location.href="http://127.0.0.1:5500/RegistrationPage/Register.html"
}

