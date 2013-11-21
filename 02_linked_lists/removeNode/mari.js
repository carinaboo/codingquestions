MYAPP = {};
/*
Just copy the next node's data and delete that node by removing the pointer to it
*/
MYAPP.deleteNode = function(node) {
	if(node == null || node.next == null) {
		return "Failure"
	}
	node.data = node.next.data;
	node.next = node.next.next;
	return
}