// A number **N** is represented in Linked List such that each digit corresponds to a node in linked list. You need to add 1 to it.

// **Example 1:**
// Input:
// LinkedList: 4->5->6
// Output:457

// **Example 2:**
// Input:
// LinkedList: 1->2->3
// Output:124

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

const addOneToList = (head) => {
  let reversed = reverseLinkedList(head);

  let current = reversed;
  let carry = 1;

  while (current) {
    let sum = current.data + carry;
    if (sum < 10) {
      current.data = sum;
      carry = 0;
      break;
    } else {
      current.data = 0;
      carry = 1;
      current = current.next;
    }
  }

  if (carry === 1) {
    let newNode = new Node(1);
    current = reversed;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  let result = reverseLinkedList(reversed);

  return result;
};

// Example 1
const list1 = new Node(4);
list1.next = new Node(5);
list1.next.next = new Node(6);

let result1 = "";
let current1 = addOneToList(list1);
while (current1) {
  result1 += current1.data;
  current1 = current1.next;
}
console.log(result1);
// Output: 457

// Example 2
const list2 = new Node(1);
list2.next = new Node(2);
list2.next.next = new Node(3);

let result2 = "";
let current2 = addOneToList(list2);
while (current2) {
  result2 += current2.data;
  current2 = current2.next;
}
console.log(result2);
// Output: 124
