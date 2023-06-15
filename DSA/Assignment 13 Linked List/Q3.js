// Given a linked list of size **N**. The task is to reverse every **k** nodes (where k is an input to the function) in the linked list. If the number of nodes is not a multiple of *k* then left-out nodes, in the end, should be considered as a group and must be reversed (See Example 2 for clarification).

// **Example 1:**
// Input:
// LinkedList: 1->2->2->4->5->6->7->8
// K = 4
// Output:4 2 2 1 8 7 6 5
// Explanation:
// The first 4 elements 1,2,2,4 are reversed first
// and then the next 4 elements 5,6,7,8. Hence, the
// resultant linked list is 4->2->2->1->8->7->6->5.

// **Example 2:**
// Input:
// LinkedList: 1->2->3->4->5
// K = 3
// Output:3 2 1 5 4
// Explanation:
// The first 3 elements are 1,2,3 are reversed
// first and then elements 4,5 are reversed.Hence,
// the resultant linked list is 3->2->1->5->4.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  append(data) {
    const newNode = new Node(data);
    
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  
  printList() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.data + ' ';
      current = current.next;
    }
    console.log(result.trim());
  }
  
  reverseKNodes(k) {
    if (k <= 1 || !this.head || !this.head.next) {
      return;
    }
    
    let current = this.head;
    let prev = null;
    let count = 1; 
    
    while (current) {
      let groupStart = current;
      let groupPrev = prev;
      
      while (current && count <= k) { 
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        count++;
      }
      
      if (groupPrev) {
        groupPrev.next = prev;
      } else {
        this.head = prev;
      }
      
      groupStart.next = current;
      
      count = 1; 
      prev = groupStart;
    }
  }
}

const list1 = new LinkedList();
list1.append(1);
list1.append(2);
list1.append(2);
list1.append(4);
list1.append(5);
list1.append(6);
list1.append(7);
list1.append(8);

list1.reverseKNodes(4);
list1.printList();
