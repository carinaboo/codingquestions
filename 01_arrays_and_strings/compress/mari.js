// Challenge 5
// Implement a method to perform basic string compression using the counts of repeated characters. 
// For example, the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become 
// smaller than the original string, your method should return the original string.

var MYAPP = {};

MYAPP.runLengthEncode = function(string) {
        var currLetter = string[0],
                nextLetter = "",
                outString = "",
                letterCount = 0;
 
        for(var i = 0, len = string.length; i < len; i++) {

                nextLetter = string[i];
                if(currLetter != nextLetter) {
                        outString += currLetter + letterCount;
                        currLetter = nextLetter;
                        letterCount = 0;
                }

                if(MYAPP.isLonger(outString, string)) {
                        return string;
                }


                letterCount++;
        }

        outString += currLetter + letterCount;

        if(MYAPP.isLonger(outString, string)) {
                return string;
        }
       
        return outString;
}

// Returns a boolean if string1 is longer than string2
MYAPP.isLonger = function(string1, string2) {
        return string1.length > string2.length;
}