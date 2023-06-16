// Given a linked list of **N** nodes such that it may contain a loop.

// A loop here means that the last node of the link list is connected to the node at position X(1-based index). If the link list does not have any loop, X=0.

// Remove the loop from the linked list, if it is present, i.e. unlink the last node which is forming the loop.

// **Example 1:**
// Input:
// N = 3
// value[] = {1,3,4}
// X = 2
// Output:1
// Explanation:The link list looks like
// 1 -> 3 -> 4
//      ^    |
//      |____|
// A loop is present. If you remove it
// successfully, the answer will be 1.

// **Example 2:**
// Input:
// N = 4
// value[] = {1,8,3,4}
// X = 0
// Output:1
// Explanation:The Linked list does not
// contains any loop.

// **Example 3:**
// Input:
// N = 4
// value[] = {1,2,3,4}
// X = 1
// Output:1
// Explanation:The link list looks like
// 1 -> 2 -> 3 -> 4
// ^              |
// |______________|
// A loop is present.
// If you remove it successfully,
// the answer will be 1.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function detectAndRemoveLoop(head) {
  if (!head || !head.next) {
    return head;
  }

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  }

  if (slow !== fast) {
    return head;
  }

  slow = head;
  while (slow.next !== fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  fast.next = null;

  return head;
}

// Example 1
const list1 = new Node(1);
list1.next = new Node(3);
list1.next.next = new Node(4);
list1.next.next.next = list1.next; 

const newList1 = detectAndRemoveLoop(list1);
let result1 = '';
let current1 = newList1;
while (current1) {
  result1 += current1.data + ' ';
  current1 = current1.next;
}
console.log(result1.trim());

// Example 2
const list2 = new Node(1);
list2.next = new Node(8);
list2.next.next = new Node(3);
list2.next.next.next = new Node(4);

const newList2 = detectAndRemoveLoop(list2);
let result2 = '';
let current2 = newList2;
while (current2) {
  result2 += current2.data + ' ';
  current2 = current2.next;
}
console.log(result2.trim()); 

// Example 3
const list3 = new Node(1);
list3.next = new Node(2);
list3.next.next = new Node(3);
list3.next.next.next = new Node(4);
list3.next.next.next.next = list3.next; 

const newList3 = detectAndRemoveLoop(list3);
let result3 = '';
let current3 = newList3;
while (current3) {
  result3 += current3.data + ' ';
  current3 = current3.next;
}
console.log(result3.trim()); 
