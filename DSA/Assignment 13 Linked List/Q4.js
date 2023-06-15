// Given a linked list, write a function to reverse every alternate k nodes (where k is an input to the function) in an efficient way. Give the complexity of your algorithm.

// **Example:**
// Inputs:   1->2->3->4->5->6->7->8->9->NULL and k = 3
// Output:   3->2->1->4->5->6->9->8->7->NULL.

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
  
  reverseAlternateKNodes(head, k, reverse) {
    if (!head || k <= 1) {
      return head;
    }
    
    let current = head;
    let prev = null;
    let count = 0;
    
    if (reverse) {
      while (current && count < k) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        count++;
      }
      
      head.next = this.reverseAlternateKNodes(current, k, !reverse);
      
      return prev; 
    } else {
      while (current && count < k) {
        prev = current;
        current = current.next;
        count++;
      }
      
      if (prev) {
        prev.next = this.reverseAlternateKNodes(current, k, !reverse);
      }
      
      return head; 
    }
  }
  
  reverseAlternateKNodesWrapper(k) {
    this.head = this.reverseAlternateKNodes(this.head, k, true);
  }
}

const list1 = new LinkedList();
list1.append(1);
list1.append(2);
list1.append(3);
list1.append(4);
list1.append(5);
list1.append(6);
list1.append(7);
list1.append(8);
list1.append(9);

list1.reverseAlternateKNodesWrapper(3);
list1.printList();
