// Write a function that takes a list sorted in non-decreasing order and deletes any duplicate nodes from the list. The list should only be traversed once.

// For example if the linked list is 11->11->11->21->43->43->60 then removeDuplicates() should convert the list to 11->21->43->60.

// **Example 1:**
// Input:
// LinkedList:
// 11->11->11->21->43->43->60
// Output:
// 11->21->43->60

// ** Example 2:**
// Input:
// LinkedList:
// 10->12->12->25->25->25->34
// Output:
// 10->12->25->34

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
  
  removeDuplicates() {
    let current = this.head;
    
    while (current && current.next) {
      if (current.data === current.next.data) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  }
}

const list1 = new LinkedList();
list1.append(11);
list1.append(11);
list1.append(11);
list1.append(21);
list1.append(43);
list1.append(43);
list1.append(60);

list1.removeDuplicates();
list1.printList();
