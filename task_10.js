
//declare function
function count(arg) {
	var expCounts = {};
	var maxKey = '';
	//loop through each value
	for(var i = 0; i < arg.length; i++)
	{
	    var key = arg[i];
	    if(!expCounts[key]){
	     expCounts[key] = 0;
	    }
	    //increment the occurence of the value
	    expCounts[key]++;
	    if(maxKey == '' || expCounts[key] > expCounts[maxKey]){
	        maxKey = key;
	    }
	}
	//return the most occured value
	return maxKey;
}



console.log(count('aabdg'));