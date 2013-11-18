MYAPP = {}

// Removes duplicates in a string 
MYAPP.removeDupe = function(string) {
    var tail,
        outString,
        auxArr;

	if(typeof string != "string") {
		return "Wrong type of input. Expecting String";
	}

	if(string == "") {
		return "";
	}

	if(string.length < 2) {
		return string;
	}

    outString = "";
    
    for(var i = 0, len = string.length; i < len; i++) {
    	if (string.slice(i, len + 1).indexOf(string[i]) > -1) {
    		outString += string[i];
    	}
    }

    return outString;
}

MYAPP.removeDupe('aaabbbc');