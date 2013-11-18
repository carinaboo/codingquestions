var MYAPP = {};

/*
You can do this problem by having two pointers in that are n elements
away from each other. Once the further pointer has reached the end of
the linked list then you know that the other pointer is n elements
away from the end of the linked list.
*/
MYAPP.findNthLast = function(head, n) {
	var farPointer = closePointer = head;

	for(int i = 0; i < n; i++) {
		farPointer = farPointer.next;
	}

	while(farPointer.next !== null) {
		closePointer = closePointer.next;
		farPointer = farPointer.next;
	}

	return closePointer;
}