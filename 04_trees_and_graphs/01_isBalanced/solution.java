// The difference of min depth and max depth should not exceed 1, since the difference of 
// the min and the max depth is the maximum distance difference possible in the tree

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