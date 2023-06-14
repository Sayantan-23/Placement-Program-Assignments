// Given a linked list of **N** nodes. The task is to check if the linked list has a loop. Linked list can contain self loop.

// **Example 1:**
// Input:
// N = 3
// value[] = {1,3,4}
// x(position at which tail is connected) = 2
// Output:True
// Explanation:In above test case N = 3.
// The linked list with nodes N = 3 is
// given. Then value of x=2 is given which
// means last node is connected with xth
// node of linked list. Therefore, there
// exists a loop.

// **Example 2:**
// Input:
// N = 4
// value[] = {1,8,3,4}
// x = 0
// Output:False
// Explanation:For N = 4 ,x = 0 means
// then lastNode->next = NULL, then
// the Linked list does not contains
// any loop.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const hasLoop = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true; 
    }
  }

  return false; 
};

// Example 1
const head1 = new Node(1);
head1.next = new Node(3);
head1.next.next = new Node(4);
head1.next.next.next = head1.next; // Connect the last node to the second node

const hasLoopResult1 = hasLoop(head1);
console.log(hasLoopResult1);
// Output: true

// Example 2
const head2 = new Node(1);
head2.next = new Node(8);
head2.next.next = new Node(3);
head2.next.next.next = new Node(4);

const hasLoopResult2 = hasLoop(head2);
console.log(hasLoopResult2);
// Output: false
