var MYAPP = {};

/* 
Assume this is a singly-linked list
This algo runs in O(n) time and O(n) space complexity
You can also do this with O(1) space comp. by putting a pointer
on one element to be compared and another pointer to compare it
with all other elements. You will also need pointers to keep track
of the previous node of the 2nd pointer. 
*/
MYAPP.removeDupe = function(node) {
	var myHash = {},
		prevNode = null,
		nextNode = node.next,
		nodeData = node.data;

	while(nextNode !== null) {
		// Check if data is in hash
		if(!(nodeData in myHash)) {
			myHash[nodeData] = 1;
			prevNode = node;
			node = nextNode;
		} else { // If it's in hash then it's a dupe so remove it
			prevNode.next = nextNode;
			prevNode = node;
			node = nextNode;
		}
	}
}