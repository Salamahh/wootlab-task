
//declare functions
function count3s(end) {
	//initialize counter to zero
	var counter = 0;
	//loop through the number
	for (var i = 0; i < end + 1; i++) {
		//converting the number to string and checking if it includes 3 
     if(i.toString().includes('3')){
     	//counting the number of times three was found in the array of numbers
     	counter++;
     }
	}
	//console logging the counts
	console.log(counter)
}

