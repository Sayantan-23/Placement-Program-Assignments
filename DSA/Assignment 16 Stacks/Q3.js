// Given a stack with **push()**, **pop()**, and **empty()** operations, The task is to delete the **middle** element ****of it without using any additional data structure.

// Input  : Stack[] = [1, 2, 3, 4, 5]

// Output : Stack[] = [1, 2, 4, 5]

// Input  : Stack[] = [1, 2, 3, 4, 5, 6]

// Output : Stack[] = [1, 2, 4, 5, 6]

const deleteMiddle = (stack) => {
  const size = stack.length;
  const middleIndex = Math.floor(size / 2);

  for (let i = middleIndex; i < size - 1; i++) {
    stack[i] = stack[i + 1];
  }

  stack.pop();

  return stack;
};

// Example 1
const stack1 = [1, 2, 3, 4, 5];
const modifiedStack1 = deleteMiddle(stack1);
console.log(modifiedStack1);
// Output: [1, 2, 4, 5]

// Example 2
const stack2 = [1, 2, 3, 4, 5, 6];
const modifiedStack2 = deleteMiddle(stack2);
console.log(modifiedStack2);
// Output: [1, 2, 4, 5, 6]
