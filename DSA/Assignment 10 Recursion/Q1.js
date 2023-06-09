// Given an integer `n`, return *`true` if it is a power of three. Otherwise, return `false`*.

// An integer `n` is a power of three, if there exists an integer `x` such that `n == 3x`.

// Input: n = 27
// Output: true
// Explanation: 27 = 33

// Input: n = 0
// Output: false
// Explanation: There is no x where 3x = 0.

// Input: n = -1
// Output: false
// Explanation: There is no x where 3x = (-1).

const isPowerOfThree = (n) => {
  if (n === 1) return true;

  if (n <= 0 || n % 3 !== 0) return false;

  return isPowerOfThree(n / 3);
};

console.log(isPowerOfThree(27));
// Output: true
console.log(isPowerOfThree(0));
// Output: false
console.log(isPowerOfThree(-1));
// Output: false
