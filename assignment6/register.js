window.onload = pageLoad;

function pageLoad()
{
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() 
{
    var password = document.forms["myForm"]["password"];
    var reTypePassword = document.forms["myForm"]["retypepassword"];

    if(password.value != reTypePassword.value)
    {
        document.getElementById("errormsg").innerHTML = "Password don't match";
        alert("Password don't match");
        return false;
    }
    else if(password.value == reTypePassword.value)
    {
        return true;
    }
}