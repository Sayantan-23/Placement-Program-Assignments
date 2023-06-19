// Given a number , write a program to reverse this number using stack.

// **Examples:**
// Input : 365
// Output : 563

// Input : 6899
// Output : 9986

const reverseNumber = (num) => {
  const stack = [];
  const numString = String(num);

  for (let i = 0; i < numString.length; i++) {
    stack.push(numString[i]);
  }

  let reversedString = "";

  while (stack.length > 0) {
    reversedString += stack.pop();
  }

  const reversedNumber = parseInt(reversedString);

  return reversedNumber;
};

console.log(reverseNumber(365));
// Output: 563
console.log(reverseNumber(6899));
// Output: 9986
