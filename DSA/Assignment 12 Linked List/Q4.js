// Given a singly linked list of characters, write a function that returns true if the given list is a palindrome, else false.

// **Examples:**

// Input: R->A->D->A->R->NULL

// **Output:** Yes

// **Input:** C->O->D->E->NULL

// **Output:** No

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const isPalindrome = (head) => {
  if (!head || !head.next) {
    return true;
  }

  let stack = [];
  let curr = head;
  let length = 0;

  while (curr) {
    stack.push(curr.data);
    curr = curr.next;
    length++;
  }

  let start = 0;
  let end = length - 1;

  while (start < end) {
    if (stack[start] !== stack[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true; // All characters match, palindrome
};

// Example 1
const head1 = new Node("R");
head1.next = new Node("A");
head1.next.next = new Node("D");
head1.next.next.next = new Node("A");
head1.next.next.next.next = new Node("R");

const isPalindrome1 = isPalindrome(head1);
console.log(isPalindrome1);
// Output: true

// Example 2
const head2 = new Node("C");
head2.next = new Node("O");
head2.next.next = new Node("D");
head2.next.next.next = new Node("E");

const isPalindrome2 = isPalindrome(head2);
console.log(isPalindrome2);
// Output: false
