// Given a doubly linked list and a position. The task is to delete a node from given position in a doubly linked list.

// **Example 1:**
// Input:
// LinkedList = 1 <--> 3 <--> 4
// x = 3
// Output:1 3
// Explanation:After deleting the node at
// position 3 (position starts from 1),
// the linked list will be now as 1->3.

// **Example 2:**
// Input:
// LinkedList = 1 <--> 5 <--> 2 <--> 9
// x = 1
// Output:5 2 9

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

function deleteNodeAtPosition(head, position) {
  if (!head) {
    return null;
  }

  if (position === 1) {
    head = head.next;
    if (head) {
      head.prev = null;
    }
    return head;
  }

  let current = head;
  let count = 1;

  while (current && count < position) {
    current = current.next;
    count++;
  }

  if (!current) {
    return head;
  }

  current.prev.next = current.next;
  if (current.next) {
    current.next.prev = current.prev;
  }

  return head;
}

const list = new Node(1);
list.next = new Node(5);
list.next.prev = list;
list.next.next = new Node(2);
list.next.next.prev = list.next;
list.next.next.next = new Node(9);
list.next.next.next.prev = list.next.next;

const position = 1;
const updatedList = deleteNodeAtPosition(list, position);

let current = updatedList;
let result = '';
while (current) {
  result += current.data + ' ';
  current = current.next;
}
console.log(result.trim());
