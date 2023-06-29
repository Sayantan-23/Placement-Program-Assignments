// Given a binary tree, your task is to find subtree with maximum sum in tree.

// Examples:

// Input1 :

//        1

//      /   \

//    2      3

//   / \    / \

// 4   5  6   7

// Output1 : 28

// As all the tree elements are positive, the largest subtree sum is equal to sum of all tree elements.

// Input2 :

//        1

//      /    \

//   -2      3

//   / \    /  \

// 4   5  -6   2

// Output2 : 7

// Subtree with largest sum is :

//  -2

//  / \

// 4   5

// Also, entire tree sum is also 7.

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const maxSubtreeSum = (root) => {
  let maxSum = -Infinity;
  let treeSum = 0;

  function subtreeSum(node) {
    if (node === null) {
      return 0;
    }

    const leftSum = subtreeSum(node.left);
    const rightSum = subtreeSum(node.right);

    const currentSum = node.val + leftSum + rightSum;

    maxSum = Math.max(maxSum, currentSum);

    return currentSum;
  }

  subtreeSum(root);

  return maxSum;
};

// Example 1
const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(5);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(7);

console.log(maxSubtreeSum(root1));
// Output: 28

// Example 2
const root2 = new TreeNode(1);
root2.left = new TreeNode(-2);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);
root2.left.right = new TreeNode(5);
root2.right.left = new TreeNode(-6);
root2.right.right = new TreeNode(2);

console.log(maxSubtreeSum(root2));
// Output: 7
