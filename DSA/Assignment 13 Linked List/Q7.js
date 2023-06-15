// Given a **Doubly Linked List**, the task is to reverse the given Doubly Linked List.

// **Example:**
// Original Linked list 10 8 4 2
// Reversed Linked list 2 4 8 10

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

function reverseDoublyLinkedList(head) {
  if (!head || !head.next) {
    return head;
  }

  let current = head;
  let prev = null;

  while (current) {
    let next = current.next;
    current.next = prev;
    current.prev = next;

    prev = current;
    current = next;
  }

  head = prev;

  return head;
}

const list = new Node(10);
list.next = new Node(8);
list.next.prev = list;
list.next.next = new Node(4);
list.next.next.prev = list.next;
list.next.next.next = new Node(2);
list.next.next.next.prev = list.next.next;

const reversedList = reverseDoublyLinkedList(list);

let current = reversedList;
let result = '';
while (current) {
  result += current.data + ' ';
  current = current.next;
}
console.log(result.trim());
