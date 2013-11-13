// Challenge 2
// Implement an algorithm to determine if a string has all unique characters.
// Assume the string is all letters, uppercase or lowercase, ASCII

function isUnique(str) {
	str = str.toLowerCase();
	var charArr = new Array(26); // if it wasn't just the 26 chars in alphabet, use Array(256)
	for (var i = 0; i < str.length; i++) {
		var index = str.charCodeAt(i) - 97;

		if (charArr[index] == 1) {
			return false;
		} else {
			charArr[index] = 1;
		}
	}
	return true;
}