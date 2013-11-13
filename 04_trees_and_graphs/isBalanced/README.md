# Challenge 3
Carina  
Nov 9, 2013


## Question
Implement a function to check if a tree is balanced. For the purposes of this question, a balanced tree is defined to be a tree such that no two leaf nodes differ in distance from the root by more than one.


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

![alt text](https://github.com/carinaboo/codingquestions/blob/master/04_trees_and_graphs/isBalanced/unbalanced_tree.png "unbalanced tree, depth different is > 1")