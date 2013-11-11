// Challenge 3
// Implement a function to check if a tree is balanced. For the purposes of this question, a balanced tree is 
// defined to be a tree such that no two leaf nodes differ in distance from the root by more than one.

// Helper functions to check if subtrees are balanced
var checkMaxDepth = function(node) {
        if(node == null) {
                return 0
        } else {
                return 1 + Math.max(checkMaxDepth(node.left) - checkMaxDepth(node.right));
        }
}
 
var checkMinDepth = function(node) {
        if(node == null) {
                return 0
        } else {
                return 1 + Math.min(checkMinDepth(node.left) - checkMinDepth(node.right));
        }
}
 
var isBalanced = function(root) {
        if(root == null) {
                return false;
        }
        return checkMaxDepth(root) - checkMinDepth(root) <= 1
}