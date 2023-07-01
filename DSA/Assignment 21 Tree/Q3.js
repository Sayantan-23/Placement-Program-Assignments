// Write a program to convert a binary tree to a doubly linked list.

// Input:
//       10
//       /  \
//     5   20
//         /  \
//       30    35

// Output:
// 5 10 30 20 35

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class DoublyLinkedListNode {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

const convertToDoublyLinkedList = (root) => {
  if (root === null) {
    return null;
  }

  let prev = null;
  let head = null;

  const convertHelper = (node) => {
    if (node === null) {
      return;
    }

    convertHelper(node.left);

    const current = new DoublyLinkedListNode(node.val);

    if (prev === null) {
      head = current;
    } else {
      prev.next = current;
      current.prev = prev;
    }

    prev = current;

    convertHelper(node.right);
  };

  convertHelper(root);

  return head;
};

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(20);
root.right.left = new TreeNode(30);
root.right.right = new TreeNode(35);

const head = convertToDoublyLinkedList(root);

let current = head;
const result = [];
while (current !== null) {
  result.push(current.val);
  current = current.next;
}

// Print the result
console.log(result.join(" "));
