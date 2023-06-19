// Given a stack of integers, sort it in ascending order using another temporary stack.

// **Examples:**
// Input : [34, 3, 31, 98, 92, 23]
// Output : [3, 23, 31, 34, 92, 98]

// Input : [3, 5, 1, 4, 2, 8]
// Output : [1, 2, 3, 4, 5, 8]

const sortStack = (stack) => {
  const tempStack = [];

  while (stack.length > 0) {
    const temp = stack.pop();

    while (tempStack.length > 0 && tempStack[tempStack.length - 1] < temp) {
      stack.push(tempStack.pop());
    }

    tempStack.push(temp);
  }

  while (tempStack.length > 0) {
    stack.push(tempStack.pop());
  }
};

const stack = [34, 3, 31, 98, 92, 23];
sortStack(stack);
console.log(stack);
// Output: [3, 23, 31, 34, 92, 98]

const stack2 = [3, 5, 1, 4, 2, 8];
sortStack(stack2);
console.log(stack2);
// Output: [1, 2, 3, 4, 5, 8]
