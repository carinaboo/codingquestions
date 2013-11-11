# Challenge 2
Mari
Nov 9, 2013


## Question
Implement an algorithm to determine if a string has all unique characters.


## Solution
For simplicity, assume char set is ASCII (if not, we need to increase the storage size The rest of the logic would be the same) NOTE: This is a great thing to point out to your interviewer!
```java
	public static boolean isUniqueChars2(String str) { 
		boolean[] char_set = new boolean[256];
		for (int i = 0; i < str.length(); i++) {
			int val = str.charAt(i);
			if (char_set[val]) return false; 
			char_set[val] = true;
		}
		return true; 
	}
```
Time complexity is O(n), where n is the length of the string, and space complexity is O(n).

We can reduce our space usage a little bit by using a bit vector. We will assume, in the below code, that the string is only lower case ‘a’ through ‘z’ This will allow us to use just a single int.
```java
	public static boolean isUniqueChars(String str) { 
		int checker = 0;
		for (int i = 0; i < str.length(); ++i) {
			int val = str.charAt(i) - ‘a’;
			if ((checker & (1 << val)) > 0) return false; 
			checker |= (1 << val);
		}
		return true;
	}
```