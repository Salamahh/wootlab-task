
//declare function
function findReverse(word) {
	//find the reverse of the string and join it back to form a whole string
	var reverse =  word.split('').reverse().join('');
	if(word == reverse){
		//if word is palindrome, return yes
		return "Yes";
	}else{
		//if not palindrome, return no
		return "No";
	}
}

//console log and test function
console.log(findReverse('raceca'))