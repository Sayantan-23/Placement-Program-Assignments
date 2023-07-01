// Given a Binary Search Tree with all unique values and two keys. Find the distance between two nodes in BST. The given keys always exist in BST.

// Example:

// Consider the following BST:

// **Input-1:**

// n = 9
// values = [8, 3, 1, 6, 4, 7, 10, 14,13]
// node-1 = 6
// node-2 = 14

// **Output-1:**

// The distance between the two keys = 4
// **Input-2:**
// n = 9
// values = [8, 3, 1, 6, 4, 7, 10, 14,13]
// node-1 = 3
// node-2 = 4

// **Output-2:**

// The distance between the two keys = 2

// TreeNode class definition
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Function to insert a node into the BST
const insertNode = (root, val) => {
  if (root === null) {
    return new TreeNode(val);
  }

  if (val < root.val) {
    root.left = insertNode(root.left, val);
  } else {
    root.right = insertNode(root.right, val);
  }

  return root;
};

const findLCA = (root, node1, node2) => {
  if (root.val < node1.val && root.val < node2.val) {
    return findLCA(root.right, node1, node2);
  } else if (root.val > node1.val && root.val > node2.val) {
    return findLCA(root.left, node1, node2);
  } else {
    return root;
  }
};

const findDistanceFromLCA = (root, node, distance) => {
  if (root === null) {
    return -1;
  }

  if (root.val === node.val) {
    return distance;
  } else if (node.val < root.val) {
    return findDistanceFromLCA(root.left, node, distance + 1);
  } else {
    return findDistanceFromLCA(root.right, node, distance + 1);
  }
};

function findDistance(root, node1, node2) {
  const lca = findLCA(root, node1, node2);

  const distance1 = findDistanceFromLCA(lca, node1, 0);
  const distance2 = findDistanceFromLCA(lca, node2, 0);

  const totalDistance = distance1 + distance2;

  return totalDistance;
}

// Example 1
const values = [8, 3, 1, 6, 4, 7, 10, 14, 13];
let root = null;
for (const val of values) {
  root = insertNode(root, val);
}

const node1 = new TreeNode(6);
const node2 = new TreeNode(14);

const distance = findDistance(root, node1, node2);

console.log("The distance between the two keys:", distance);

// Example 2
const values2 = [8, 3, 1, 6, 4, 7, 10, 14, 13];
let root2 = null;
for (const val of values2) {
  root2 = insertNode(root2, val);
}

const node01 = new TreeNode(3);
const node02 = new TreeNode(4);

const distance2 = findDistance(root2, node01, node02);

console.log("The distance between the two keys:", distance2);