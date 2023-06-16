// Given a Linked List of size N, where every node represents a sub-linked-list and contains two pointers:(i) a **next** pointer to the next node,(ii) a **bottom** pointer to a linked list where this node is head.Each of the sub-linked-list is in sorted order.Flatten the Link List such that all the nodes appear in a single level while maintaining the sorted order. **Note:** The flattened list will be printed using the bottom pointer instead of next pointer.

// **Example 1:**
// Input:
// 5 -> 10 -> 19 -> 28
// |     |     |     |
// 7     20    22   35
// |           |     |
// 8          50    40
// |                 |
// 30               45
// Output: 5-> 7-> 8- > 10 -> 19-> 20->
// 22-> 28-> 30-> 35-> 40-> 45-> 50.
// Explanation:
// The resultant linked lists has every
// node in a single level.(Note:| represents the bottom pointer.)

// **Example 2:**
// Input:
// 5 -> 10 -> 19 -> 28
// |          |
// 7          22
// |          |
// 8          50
// |
// 30
// Output: 5->7->8->10->19->22->28->30->50
// Explanation:
// The resultant linked lists has every
// node in a single level.

let head;

class Node {
  constructor(val) {
    this.data = val;
    this.down = null;
    this.next = null;
  }
}

function merge(a, b) {
  if (a == null) return b;

  if (b == null) return a;

  let result;

  if (a.data < b.data) {
    result = a;
    result.down = merge(a.down, b);
  } else {
    result = b;
    result.down = merge(a, b.down);
  }

  result.right = null;
  return result;
}

const flatten = (root) => {
  if (root == null || root.right == null) return root;

  root.right = flatten(root.right);

  root = merge(root, root.right);

  return root;
};

const push = (head, data) => {
  let newNode = new Node(data);

  newNode.down = head;

  head = newNode;

  return head;
};

function printList() {
  let temp = head;
  while (temp != null) {
    console.log(temp.data + " ");
    temp = temp.down;
  }
  console.log();
}

head = push(head, 30);
head = push(head, 8);
head = push(head, 7);
head = push(head, 5);

head.right = push(head.right, 20);
head.right = push(head.right, 10);

head.right.right = push(head.right.right, 50);
head.right.right = push(head.right.right, 22);
head.right.right = push(head.right.right, 19);

head.right.right.right = push(head.right.right.right, 45);
head.right.right.right = push(head.right.right.right, 40);
head.right.right.right = push(head.right.right.right, 35);
head.right.right.right = push(head.right.right.right, 20);

head = flatten(head);

printList();
