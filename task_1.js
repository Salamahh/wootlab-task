//declare function
function takeArray(array) {
	//initialized variable to hold sum of all even numbers
	var sumOfEven = 0;
	//initialized variable to hold sum of all even numbers
	var sumOfOdd = 0;

	//iterated over the array
	for (var i = 0; i < array.length; i++) {
		//using the modulus operator to determine if the array value is an even number
		if(array[i] % 2 == 0){
			sumOfEven += array[i];
		}else{
		//this evaluates if the value is not an even number
			sumOfOdd += array[i];
		}
	}
	//returning the sum of even numbers as even or odd
	return [sumOfEven,sumOfOdd];
}

//console logging and testing the function
console.log(takeArray([2,4,3,5]))

