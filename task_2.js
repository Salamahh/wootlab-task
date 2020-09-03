
//declared function to check for prime number
function isPrime(number) {
	//create a loop starting from 2, since its a prime and less than the actual number
	for (var i = 2; i < number; i++) {
		//if the number retuns a value of zero after division with the iterator, it is not a prime number
		if(number % i === 0){
			return false;
		}
		//returns true or false value based on if its prime or not
		return number > 1;
	}
}

//console logging and checking results
console.log(isPrime(4))

