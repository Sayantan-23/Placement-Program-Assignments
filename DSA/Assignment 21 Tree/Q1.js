// You are given a binary tree. The binary tree is represented using the TreeNode class. Each TreeNode has an integer value and left and right children, represented using the TreeNode class itself. Convert this binary tree into a binary search tree.

// Input:

//        10
//       /  \
//      2    7
//     / \
//   8    4

// Output:

//         8
//        / \
//       4  10
//      / \
//    2    7

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const inorderTraversal = (node, values) => {
  if (node === null) return;

  inorderTraversal(node.left, values);
  values.push(node.val);
  inorderTraversal(node.right, values);
};

const convertToBST = (root) => {
  const values = [];
  inorderTraversal(root, values);

  values.sort((a, b) => a - b);

  let index = 0;
  const replaceValues = (node) => {
    if (node === null) return;

    replaceValues(node.left);
    node.val = values[index];
    index++;
    replaceValues(node.right);
  };

  replaceValues(root);

  return root;
};

const root = new TreeNode(10);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(8);
root.left.right = new TreeNode(4);

const bstRoot = convertToBST(root);

const inorderDisplay = (node) => {
  if (node === null) return;

  inorderDisplay(node.left);
  console.log(node.val);
  inorderDisplay(node.right);
};
