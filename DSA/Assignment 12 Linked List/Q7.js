// Given two linked lists, insert nodes of second list into first list at alternate positions of first list.
// For example, if first list is 5->7->17->13->11 and second is 12->10->2->4->6, the first list should become 5->12->7->10->17->2->13->4->11->6 and second list should become empty. The nodes of second list should only be inserted when there are positions available. For example, if the first list is 1->2->3 and second list is 4->5->6->7->8, then first list should become 1->4->2->5->3->6 and second list to 7->8.

// Use of extra space is not allowed (Not allowed to create additional nodes), i.e., insertion must be done in-place. Expected time complexity is O(n) where n is number of nodes in first list.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function mergeAlternate(head1, head2) {
  if (!head1) {
    return head2;
  }
  if (!head2) {
    return head1;
  }

  let curr1 = head1;
  let curr2 = head2;

  while (curr1 && curr2) {
    let temp1 = curr1.next;
    let temp2 = curr2.next;

    curr1.next = curr2;
    curr2.next = temp1;

    curr1 = temp1;
    curr2 = temp2;
  }

  return head1;
}

// Example
let head1 = new Node(5);
head1.next = new Node(7);
head1.next.next = new Node(17);
head1.next.next.next = new Node(13);
head1.next.next.next.next = new Node(11);

let head2 = new Node(12);
head2.next = new Node(10);
head2.next.next = new Node(2);
head2.next.next.next = new Node(4);
head2.next.next.next.next = new Node(6);

let curr1 = head1;

while (curr1 && head2) {
  let temp1 = curr1.next;
  let temp2 = head2.next;

  curr1.next = head2;
  head2.next = temp1;

  curr1 = temp1;
  head2 = temp2;
}

// Verify the modified first list
let curr = head1;
while (curr) {
  console.log(curr.data);
  curr = curr.next;
}
// Output: 5 12 7 10 17 2 13 4 11 6

// Verify the modified second list
let curr2 = head2;
while (curr2) {
  console.log(curr2.data);
  curr2 = curr2.next;
}
// Output: (Empty)
