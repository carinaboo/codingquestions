# Challenge 3
Carina  
Nov 9, 2013


## Question
Implement a function to check if a tree is balanced. For the purposes of this question, a balanced tree is defined to be a tree such that no two leaf nodes differ in distance from the root by more than one.

![alt text](https://raw.github.com/carinaboo/codingquestions/master/04_trees_and_graphs/isBalanced/unbalanced_tree.png?token=822291__eyJzY29wZSI6IlJhd0Jsb2I6Y2FyaW5hYm9vL2NvZGluZ3F1ZXN0aW9ucy9tYXN0ZXIvMDRfdHJlZXNfYW5kX2dyYXBocy9pc0JhbGFuY2VkL3VuYmFsYW5jZWRfdHJlZS5wbmciLCJleHBpcmVzIjoxMzg0OTQzOTI0fQ%3D%3D--989e73548ea621477727f5dbefcaaa8a0b0ca8c5 "unbalanced tree, depth different is > 1")


## Solution
The difference of min depth and max depth should not exceed 1, since the difference of the min and the max depth is the maximum distance difference possible in the tree
```java
	public static int maxDepth(TreeNode root) { 
		if (root == null) {
			return 0;
		}
		return 1 + Math.max(maxDepth(root.left), maxDepth(root.right)); 
	}

	public static int minDepth(TreeNode root) { 
		if (root == null) {
			return 0; 
		}
		return 1 + Math.min(minDepth(root.left), minDepth(root.right)); 
	}

	public static boolean isBalanced(TreeNode root) {
		return (maxDepth(root) - minDepth(root) <= 1); 
	}
```