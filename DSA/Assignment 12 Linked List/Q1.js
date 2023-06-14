// Given a singly linked list, delete middle of the linked list. For example, if given linked list is 1->2->3->4->5 then linked list should be modified to 1->2->4->5.If there are even nodes, then there would be two middle nodes, we need to delete the second middle element. For example, if given linked list is 1->2->3->4->5->6 then it should be modified to 1->2->3->5->6.If the input linked list is NULL or has 1 node, then it should return NULL

// **Example 1:**
// Input:
// LinkedList: 1->2->3->4->5
// Output:1 2 4 5

// **Example 2:**
// Input:
// LinkedList: 2->4->6->7->5->1
// Output:2 4 6 5 1

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const deleteMiddleNode = (head) => {
  if (!head || !head.next) {
    return null;
  }

  let slow = head;
  let fast = head;
  let previous = null;

  while (fast && fast.next) {
    fast = fast.next.next;
    previous = slow;
    slow = slow.next;
  }

  previous.next = slow.next;

  return head;
};

const printLinkedList = (head) => {
  let curr = head;
  while (curr) {
    console.log(curr.data);
    curr = curr.next;
  }
};

// Create the linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log("Original linked list:");
printLinkedList(head);

// Delete the middle node(s)
const newHead = deleteMiddleNode(head);

console.log("Modified linked list:");
printLinkedList(newHead);
