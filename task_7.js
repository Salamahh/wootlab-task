
//create function
function standardDeviation(array){
	//declare diffrences for squared numbers
	var squaredDifference = 0;
	//using javascript reduce function to sum up all numbers in the array
	var total =  array.reduce(function(a,b){
		return a+b;
	},0);
	//finding the mean of the total sum of the numbers
	var mean = total/array.length;
	//looping through the array to find the square of the difference between the array values and the mean
	for (var i = 0; i < array.length; i++) {
		 squaredDifference += (array[i] - mean)**2;
	}
	//getting the variance from the sum of the squaredDifference
	 var variance = squaredDifference/array.length;

	 //getting standard deviation from the square root of variance
	 return variance ** 0.5;
}

//console log and test function
console.log(standardDeviation([9,2,5,4,12,7]))