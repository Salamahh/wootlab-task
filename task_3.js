
//declare function
function isPrime(array) {
	//initialize the variable to store prime numbers to an empty array
	var primeNumbers = [];
	//loop through the array of numbers
	for (var i = 0; i < array.length; i++) {
		//determine if number is prime
		for (var j = 2; j < array[i]; i++) {
			if(array[i] % j === 0){
				continue;
			}
			//if number is prime push to array
			 if(array[i] > 1)
			 	primeNumbers.push(array[i]);
		}
	}
	//return array of prime numbers
	return primeNumbers;
	
}

//console log and test function
console.log(isPrime([3,2,4,5,6,7,8]))

