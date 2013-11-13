// Challenge 5
// Implement a method to perform basic string compression using the counts of repeated characters. 
// For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become 
// smaller than the original string, your method should return the original string.

var compress = function(string) {
	var compressedString = "";
	if (string.length > 0) {
		var currChar = string.charAt(0), // current char we are keeping a count for
			nextChar = "",
			charCount = 1; 
		for (var i=1, length=string.length; i < length; i++) {
			nextChar = string.charAt(i);
			if (nextChar != currChar) {
				compressedString += currChar + charCount;
				currChar = nextChar;
				charCount = 1;
			} else {
				charCount++;
			}
		}
		compressedString += currChar + charCount;
	}
	return compressedString;
};

compress("aabcccccaaa"); // "a2b1c5a3"