
//check password strength
function checkPassword(password) {
	//using regular expressions to check if password contains only alphabets
	if(/^[A-Za-z]+$/.test(password)){
		return 0;
	}else if( /^\d+$/.test(password)){
	//using regular expressions to check if password contains only numbers
		return 1;
	}else if(/^[0-9a-zA-Z]+$/.test(password)){
	//using regular expressions to check if password contains only numbers and alphabets
		return 2;
	}else{
	//returns value if other if statements fail
		return 3;
	}
}

//console log and test function
console.log(checkPassword('22fkk99'))

