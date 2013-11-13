MYAPP = {}

// Removes duplicates in a string 
MYAPP.removeDupe = function(string) {
	var tail;

	if(typeof string != "string") {
		return "Wrong type of input. Expecting String";
	}

	if(string == "") {
		return "";
	}

	if(string.length < 2) {
		return string;
	}

	tail = 1;

	loop1:
		for(var i = 1, len = string.length; i < len; i++) {

		loop2:
			for(var j = 0; j < tail; j++) {
				if(string[j] == string[i]) { //Break if we find duplicate char
					break loop2;
				}

				if(j == tail) {
					string[tail] = string[i];
					tail++;
				}
			}
			string[tail] = 0;
		}
	return string.slice(0, tail);
}