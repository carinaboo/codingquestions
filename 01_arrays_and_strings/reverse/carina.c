// Challenge 1
// Implement a function void reverse(char* str) in C or C++ which reverses a null-terminated string.

#include <stdio.h>

int length(char* str) {
    // returns length of a string, not including the NULL char
    int i = 0;
    while (*(str+i) != '\0') {
        i++;
    }
    return i;
}

void reverse(char* str) {
    // reverses null-terminated string
    int len = length(str);
    if (len != 0) {
        int i;
        for (i = 0; i < len/2; i++) {
            char c = *(str+len-1-i);
            *(str+len-1-i) = *(str+i);
            *(str+i) = c;
        }
    }
}

int main(void) {
    char empty[] = "";
    char one[] = "1";
    char hello[] = "olleh";
    char boo[] = "oob anirac";
    char mystery[] = "!looc os si aniluap";
    
    printf("original strings:\n");
    printf("'%s'\n", empty);
    printf("'%s'\n", one);
    printf("'%s'\n", hello);
    printf("'%s'\n", boo);
    printf("'%s'\n", mystery);
    
    printf("\n");
    reverse(empty);
    reverse(one);
    reverse(hello);
    reverse(boo);
    reverse(mystery);
    
    printf("reversed strings:\n");
    printf("'%s'\n", empty); // ""
    printf("'%s'\n", one); // "1"
    printf("'%s'\n", hello); // "hello"
    printf("'%s'\n", boo); // "carina boo"
    printf("'%s'\n", mystery); // "paulina is so cool"
}