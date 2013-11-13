# Challenge 1
Paulina  
Oct 13, 2013


## Question
Implement a function void reverse(char* str) in C or C++ which reverses a null-terminated string.


## Solution
This is a classic interview question The only “gotcha” is to try to do it in place, and to be care- ful for the null character
```c
	void reverse(char *str) {
		char *end = str;
		char tmp;
		if (str) {
			while (*end) { 
				++end;
			}
			--end;
			while (str < end) {
				tmp = *str; 
				*str++ = *end; 
				*end-- = tmp;
			} 
		}
	}
```