class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }

  display() {
    console.log(this.queue);
  }
}

const queue = new Queue();

console.log(queue.isEmpty());
console.log(queue.dequeue());
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();
queue.enqueue(5);

queue.display();

console.log(queue.size());
