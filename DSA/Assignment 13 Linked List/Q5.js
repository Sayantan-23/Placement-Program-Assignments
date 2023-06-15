// Given a linked list and a key to be deleted. Delete last occurrence of key from linked. The list may have duplicates.

// **Examples**:
// Input:   1->2->3->5->2->10, key = 2
// Output:  1->2->3->5->10

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
  
  deleteLastOccurrence(key) {
    if (!this.head) {
      return this.head;
    }
    
    let prev = null;
    let last = null;
    let current = this.head;
    
    while (current) {
      if (current.data === key) {
        prev = last;
      }
      if (current.next && current.next.data === key) {
        prev = current;
      }
      last = current;
      current = current.next;
    }
    
    if (prev) {
      prev.next = prev.next.next;
    } else if (last && last.data === key) {
      this.head = last.next;
    }
    
    return this.head;
  }
}

const list1 = new LinkedList();
list1.append(1);
list1.append(2);
list1.append(3);
list1.append(5);
list1.append(2);
list1.append(10);

list1.deleteLastOccurrence(2);
list1.printList();
