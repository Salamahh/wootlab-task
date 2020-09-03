//declare function
function addUpTo(array,number) {
	// set counter value to zero
	var counter = 0;
    for (var i = 0; i < array.length; i++,counter++) {
    	if(counter > 3){
    		//add up three array values
    		var val = array[i] + array[i] + array[i];
    		counter = 0;
    		//if value is same as number then return as an array
    		if(val == number){
    			return [ array[i], array[i], array[i] ];
    		}
    	}
    }
    //if no values add up to the number then return -1
    return -1;
}

