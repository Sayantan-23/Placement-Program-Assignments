// Given a linked list consisting of **L** nodes and given a number **N**. The task is to find the **N**th node from the end of the linked list.

// **Example 1:**
// Input:
// N = 2
// LinkedList: 1->2->3->4->5->6->7->8->9
// Output:8
// Explanation:In the first example, there
// are 9 nodes in linked list and we need
// to find 2nd node from end. 2nd node
// from end is 8.

// **Example 2:**
// Input:
// N = 5
// LinkedList: 10->5->100->5
// Output:-1
// Explanation:In the second example, there
// are 4 nodes in the linked list and we
// need to find 5th from the end. Since 'n'
// is more than the number of nodes in the
// linked list, the output is -1.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const findNthFromEnd = (head, N) => {
  let mainPtr = head;
  let refPtr = head;

  // Move mainPtr N nodes ahead
  let count = 0;
  while (count < N) {
    if (!mainPtr) {
      // N is greater than the number of nodes
      return -1;
    }
    mainPtr = mainPtr.next;
    count++;
  }

  // Move both pointers until mainPtr reaches the end
  while (mainPtr) {
    mainPtr = mainPtr.next;
    refPtr = refPtr.next;
  }

  return refPtr.data;
};

// Example 1
const head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);
head1.next.next.next = new Node(4);
head1.next.next.next.next = new Node(5);
head1.next.next.next.next.next = new Node(6);
head1.next.next.next.next.next.next = new Node(7);
head1.next.next.next.next.next.next.next = new Node(8);
head1.next.next.next.next.next.next.next.next = new Node(9);

const N1 = 2;
const nthFromEnd1 = findNthFromEnd(head1, N1);
console.log(nthFromEnd1);
// Output: 8

// Example 2
const head2 = new Node(10);
head2.next = new Node(5);
head2.next.next = new Node(100);
head2.next.next.next = new Node(5);

const N2 = 5;
const nthFromEnd2 = findNthFromEnd(head2, N2);
console.log(nthFromEnd2);
// Output: -1
