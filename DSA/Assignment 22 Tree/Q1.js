// Given a Binary Tree (Bt), convert it to a Doubly Linked List(DLL). The left and right pointers in nodes are to be used as previous and next pointers respectively in converted DLL. The order of nodes in DLL must be the same as in Inorder for the given Binary Tree. The first node of Inorder traversal (leftmost node in BT) must be the head node of the DLL.

// Example:

class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

let root;

let head;

let prev = null;

function BinaryTree2DoubleLinkedList(root) {
  if (root == null)
    return;

  BinaryTree2DoubleLinkedList(root.left);

  if (prev == null)
    head = root;
  else {
    root.left = prev;
    prev.right = root;
  }
  prev = root;

  BinaryTree2DoubleLinkedList(root.right);
}

function printList(node) {
  while (node != null) {
    console.log(node.data + " ");
    node = node.right;
  }
}

root = new Node(10);
root.left = new Node(12);
root.right = new Node(15);
root.left.left = new Node(25);
root.left.right = new Node(30);
root.right.left = new Node(36);

BinaryTree2DoubleLinkedList(root);

printList(head);
