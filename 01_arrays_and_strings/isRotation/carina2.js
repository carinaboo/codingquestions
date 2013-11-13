// Challenge 4
// Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, 
// write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g. “waterbottle” is a rotation of “erbottlewat”)

var isSubstring = function(s1, s2) {
// checks if s1 is a substring of s2
// e.g. box is a substring of mailbox
	return s2.indexOf(s1) !== -1;
}

var isRotation = function(s1, s2) {
// this version will take advantage of isSubsting
	if (s1.length != s2.length) {
		return false;
	} else if (s1 == s2) {
		return true;
	} else {
		for (var i = s1.length; i > 0; i++) {
			if (s1.charAt(i) == s2.charAt(0)) {
				// not done
			}
		}
		return false;
	}
}