// Write a program to connect nodes at the same level.

// Input:

//         1
//       /   \
//      2      3
//     / \    / \
//    4   5  6   7

// Output:

// 1 → -1

// 2 → 3

// 3 → -1

// 4 → 5

// 5 → 6

// 6 → 7

// 7 → -1

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

const connectNodesAtSameLevel = (root) => {
  if (root === null) {
    return;
  }

  const queue = [root, null];
  let prev = null;

  while (queue.length > 0) {
    const current = queue.shift();

    if (current === null) {
      if (queue.length > 0) {
        queue.push(null);
      }
      prev = null;
    } else {
      if (prev !== null) {
        prev.next = current;
      }
      prev = current;

      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
    }
  }
};

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

connectNodesAtSameLevel(root);

const result = [];
let current = root;
while (current !== null) {
  let temp = current;
  while (temp !== null) {
    const nextVal = temp.next !== null ? temp.next.val : -1;
    result.push(temp.val + " → " + nextVal);
    temp = temp.next;
  }
  result.push("");
  current = current.left;
}

console.log(result.join("\n"));
