// Construct the BST (Binary Search Tree) from its given level order traversal.

// Example:

// Input: arr[] = {7, 4, 12, 3, 6, 8, 1, 5, 10}

// Output: BST:

//             7
//            / \
//          4    12
//         / \   /
//        3   6 8
//       /    / \
//      1    5   10

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const constructBST = (levelOrder) => {
  if (levelOrder.length === 0) {
    return null;
  }

  const root = new TreeNode(levelOrder[0]);

  const queue = [];
  queue.push(root);

  for (let i = 1; i < levelOrder.length; i++) {
    const currentNode = queue.shift();

    const newNode = new TreeNode(levelOrder[i]);

    if (newNode.val < currentNode.val) {
      currentNode.left = newNode;
    } else {
      currentNode.right = newNode;
    }

    queue.push(newNode);
  }

  return root;
};

const levelOrder = [7, 4, 12, 3, 6, 8, 1, 5, 10];
const root = constructBST(levelOrder);

const inorderTraversal = (node) => {
  if (node === null) {
    return;
  }
  inorderTraversal(node.left);
  console.log(node.val);
  inorderTraversal(node.right);
};

// Print the constructed BST
inorderTraversal(root);
