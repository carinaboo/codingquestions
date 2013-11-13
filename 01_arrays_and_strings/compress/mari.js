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
                letterCount++;
        }
       
        outString += currLetter + letterCount;
       
        if(outString.length > string.length) {
                return string;
        }
 
        return outString;
}