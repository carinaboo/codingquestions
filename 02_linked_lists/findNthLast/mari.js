var MYAPP = {};

/*
You can do this problem by having two pointers in that are n elements
away from each other. Once the further pointer has reached the end of
the linked list then you know that the other pointer is n elements
away from the end of the linked list. This algo runs in O(n) time 
and O(1) space complexity.
*/
MYAPP.findNthLast = function(head, n) {
	var farPointer = closePointer = head;

	for(int i = 0; i < n - 1; i++) {
		farPointer = farPointer.next;
	}

	while(farPointer.next !== null) {
		closePointer = closePointer.next;
		farPointer = farPointer.next;
	}

	return closePointer;
}