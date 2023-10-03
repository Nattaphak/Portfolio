window.onload = loginLoad;

function loginLoad()
{
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin()
{
	var userName = document.forms["myLogin"]["username"];
    var pass = document.forms["myLogin"]["password"];

	const queryString = window.location.search;
	console.log(queryString);

	const urlParams = new URLSearchParams(queryString);
	const userURL = urlParams.get('username')

	const passURL = urlParams.get('password')

	if(userName.value != userURL || pass.value != passURL)
	{
		alert("Worng Username or Password");
		return false;
	}
	else if(userName.value == userURL && pass.value == passURL)
	{
		alert("Hello Welcome");
		return true;
	}
}

			