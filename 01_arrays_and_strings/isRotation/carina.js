// Challenge 4
// Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, 
// write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g. "waterbottle" is a rotation of "erbottlewat")

var isSubstring = function(s1, s2) {
// checks if s1 is a substring of s2
// e.g. s1=box is a substring of s2=mailbox
	return s2.indexOf(s1) !== -1;
};

var isRotation = function(s1, s2) {
// doesn't take advantage of isSubstring yet
	if (s1.length != s2.length) {
		return false;
	} else if (s1 == s2) {
		return true;
	} else {
		for (var i = 0, length = s1.length; i < length; i++) {
			if (s1.charAt(i) == s2.charAt(0)) {
				var startIndex = i;
				i++;
				for (var j = 1; i < length; i++, j++) { // compare rest of s1
					if (s1.charAt(i) != s2.charAt(j)) {
						break;
					}
				}
				// rest of s1 is same as beginning of s2; check beginning of s1 is same as end of s2
				if (i == length) {
					if (s1.substring(0, startIndex) == s2.substring(length-startIndex, length)) {
						return true;
					}
				}
			}
		}
		return false;
	}
};

isSubstring("box", "mailbox"); // true
isRotation("waterbottle", "erbottlewat"); // true