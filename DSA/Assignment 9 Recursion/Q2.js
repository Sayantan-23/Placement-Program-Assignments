// Given a number n, find the sum of the first natural numbers.

// **Example 1:**

// Input: n = 3

// Output: 6

// **Example 2:**

// Input  : 5

// Output : 15

const sumOfFirstN = (n) => {
  if (n === 1) return 1;

  return n + sumOfFirstN(n - 1);
};

console.log(sumOfFirstN(3));
// Output: 6
console.log(sumOfFirstN(5));
// Output: 15
