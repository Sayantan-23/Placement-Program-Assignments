// Given an array of integers **arr**, the task is to find maximum element of that array using recursion.

// **Example 1:**

// Input: arr = {1, 4, 3, -5, -4, 8, 6};
// Output: 8

// **Example 2:**

// Input: arr = {1, 4, 45, 6, 10, -8};
// Output: 45

const findMax = (arr, start, end) => {
  if (start === end) {
    return arr[start];
  }

  const mid = Math.floor((start + end) / 2);
  const leftMax = findMax(arr, start, mid);
  const rightMax = findMax(arr, mid + 1, end);

  return Math.max(leftMax, rightMax);
};

const getMax = (arr) => {
  return findMax(arr, 0, arr.length - 1);
};

console.log(getMax([1, 4, 3, -5, -4, 8, 6]));
// Output: 8
console.log(getMax([1, 4, 45, 6, 10, -8]));
// Output: 45
