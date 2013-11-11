# Challenge 1
Paulina
Oct 13, 2013


## Question
Implement a function void reverse(char* str) in C or C++ which reverses a null-terminated string.


## Solution
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