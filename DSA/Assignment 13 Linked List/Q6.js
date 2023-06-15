// Given two sorted linked lists consisting of **N** and **M** nodes respectively. The task is to merge both of the lists (in place) and return the head of the merged list.

// **Examples:**

// Input: a: 5->10->15, b: 2->3->20

// Output: 2->3->5->10->15->20

// Input: a: 1->1, b: 2->4

// Output: 1->1->2->4

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function mergeSortedLists(a, b) {
  if (!a) {
    return b;
  }
  if (!b) {
    return a;
  }

  let result;

  if (a.data <= b.data) {
    result = a;
    a = a.next;
  } else {
    result = b;
    b = b.next;
  }

  let current = result;

  while (a && b) {
    if (a.data <= b.data) {
      current.next = a;
      a = a.next;
    } else {
      current.next = b;
      b = b.next;
    }
    current = current.next;
  }

  if (a) {
    current.next = a;
  }

  if (b) {
    current.next = b;
  }

  return result;
}

const list1 = new Node(5);
list1.next = new Node(10);
list1.next.next = new Node(15);

const list2 = new Node(2);
list2.next = new Node(3);
list2.next.next = new Node(20);

const mergedList = mergeSortedLists(list1, list2);

let current = mergedList;
let result = "";
while (current) {
  result += current.data + " ";
  current = current.next;
}
console.log(result.trim());
