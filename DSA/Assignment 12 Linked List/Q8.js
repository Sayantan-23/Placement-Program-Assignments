// Given a singly linked list, find if the linked list is circular or not.

// A linked list is called circular if it is not NULL-terminated and all nodes are connected in the form of a cycle. Below is an example of a circular linked list.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const isCircular = (head) => {
  if (!head) {
    return false;
  }

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    if (slow === fast) {
      return true;
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
};

const head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);
head1.next.next.next = head1;

console.log(isCircular(head1));
// Output: true

const head2 = new Node(1);
head2.next = new Node(2);
head2.next.next = new Node(3);

console.log(isCircular(head2));
// Output: false
