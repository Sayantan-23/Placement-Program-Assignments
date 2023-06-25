class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  display() {
    console.log(this.stack);
  }
}

const stack = new Stack()

console.log(stack.isEmpty());
console.log(stack.pop());
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.pop()
stack.push(5)

stack.display()
console.log(stack.isEmpty());
console.log(stack.size());