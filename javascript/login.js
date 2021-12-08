function login()
	{
var uname = document.getElementById("uname").value;
		var email = document.getElementById("email").value;
		var pwd = document.getElementById("pwd").value;
		if(uname =='')
		{
			document.getElementById("Uname").innerHTML="Enter valid username";
		}
		else if(email=='')
		{
        	document.getElementById("Email").innerHTML="Enter valid email id";
		}
		else if(pwd=='')
		{
        	document.getElementById("Pass").innerHTML="Enter valid password";
		}
		else if(uname.length < 6 || uname.length > 12)
		{
			document.getElementById("Uname").innerHTML="Invalid username";
		}
		else if(email.length < 8 || uname.length > 16)
		{
			document.getElementById("Email").innerHTML="Invalid email id";
		}
		else if(pwd.length < 8)
		{
			document.getElementById("Pass").innerHTML="Invalid password";
		}
		else
		{
	document.getElementById("logged").innerHTML="Login successful";
		}
	}
	function clearFunc()
	{
		document.getElementById("uname").value="";
		document.getElementById("email").value="";
		document.getElementById("pwd").value="";
	}	