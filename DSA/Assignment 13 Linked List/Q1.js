// Given two linked list of the same size, the task is to create a new linked list using those linked lists. The condition is that the greater node among both linked list will be added to the new linked list.

// **Examples:**
// Input: list1 = 5->2->3->8
// list2 = 1->7->4->5
// Output: New list = 5->7->4->8

// Input:list1 = 2->8->9->3
// list2 = 5->3->6->4
// Output: New list = 5->8->9->4

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
}

function createNewList(list1, list2) {
  const newList = new LinkedList();
  
  let current1 = list1.head;
  let current2 = list2.head;
  
  while (current1 && current2) {
    if (current1.data >= current2.data) {
      newList.append(current1.data);
    } else {
      newList.append(current2.data);
    }
    current1 = current1.next;
    current2 = current2.next;
  }
  
  return newList;
}

const list1 = new LinkedList();
list1.append(2);
list1.append(8);
list1.append(9);
list1.append(3);

const list2 = new LinkedList();
list2.append(5);
list2.append(3);
list2.append(6);
list2.append(4);

const newList = createNewList(list1, list2);
newList.printList();
