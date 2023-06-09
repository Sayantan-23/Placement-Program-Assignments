// Given a positive integer, N. Find the factorial of N.

// **Example 1:**

// Input: N = 5

// Output: 120

// **Example 2:**

// Input: N = 4

// Output: 24

const factorial = (n) => {
  if (n === 0 || n === 1) return 1;

  return n * factorial(n - 1);
};

console.log(factorial(5));
// Output: 120
console.log(factorial(4));
// Output: 24
