// Given an integer k and a queue

// Only following standard operations are allowed on queue.

// - **enqueue(x) :** Add an item x to rear of queue
// - **dequeue() :** Remove an item from front of queue
// - **size() :** Returns number of elements in queue.
// - **front() :** Finds front item.

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  size() {
    return this.items.length;
  }

  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.front());
// Output: 1
console.log(queue.size());
// Output: 3
queue.dequeue();
console.log(queue.size());
// Output: 2
console.log(queue.front());
// Output: 2
