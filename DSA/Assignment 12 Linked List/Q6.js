// Given a linked list and two integers M and N. Traverse the linked list such that you retain M nodes then delete next N nodes, continue the same till end of the linked list.

// **Examples**:
// Input:
// M = 2, N = 2
// Linked List: 1->2->3->4->5->6->7->8
// Output:
// Linked List: 1->2->5->6

// Input:
// M = 3, N = 2
// Linked List: 1->2->3->4->5->6->7->8->9->10
// Output:
// Linked List: 1->2->3->6->7->8

// Input:
// M = 1, N = 1
// Linked List: 1->2->3->4->5->6->7->8->9->10
// Output:
// Linked List: 1->3->5->7->9

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const retainDelete = (head, M, N) => {
  if (!head || M === 0 || N === 0) {
    return head;
  }

  let current = head;

  while (current) {
    for (let i = 1; i < M && current; i++) {
      current = current.next;
    }

    if (!current) {
      break;
    }

    let temp = current;

    for (let i = 0; i < N && temp; i++) {
      temp = temp.next;
    }

    if (temp) {
      current.next = temp.next;
    } else {
      current.next = null;
    }

    current = current.next;
  }

  return head;
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

const modifiedList1 = retainDelete(head1, 2, 2);

let curr = modifiedList1;
while (curr) {
  console.log(curr.data);
  curr = curr.next;
}
// Output: 1 2 5 6

// Example 2
const head2 = new Node(1);
head2.next = new Node(2);
head2.next.next = new Node(3);
head2.next.next.next = new Node(4);
head2.next.next.next.next = new Node(5);
head2.next.next.next.next.next = new Node(6);
head2.next.next.next.next.next.next = new Node(7);
head2.next.next.next.next.next.next.next = new Node(8);
head2.next.next.next.next.next.next.next.next = new Node(9);
head2.next.next.next.next.next.next.next.next.next = new Node(10);

const modifiedList2 = retainDelete(head2, 3, 2);

curr = modifiedList2;
while (curr) {
  console.log(curr.data);
  curr = curr.next;
}
// Output: 1 2 3 6 7 8

// Example 3
const head3 = new Node(1);
head3.next = new Node(2);
head3.next.next = new Node(3);
head3.next.next.next = new Node(4);
head3.next.next.next.next = new Node(5);
head3.next.next.next.next.next = new Node(6);
head3.next.next.next.next.next.next = new Node(7);
head3.next.next.next.next.next.next.next = new Node(8);
head3.next.next.next.next.next.next.next.next = new Node(9);
head3.next.next.next.next.next.next.next.next.next = new Node(10);

const modifiedList3 = retainDelete(head3, 1, 1);

curr = modifiedList3;
while (curr) {
  console.log(curr.data);
  curr = curr.next;
}
// Output: 1 3 5 7 9
