// Given an integer array `nums`, return *an integer array* `counts` *where* `counts[i]` *is the number of smaller elements to the right of* `nums[i]`.

// **Example 1:**
// Input: nums = [5,2,6,1]
// Output: [2,1,1,0]
// Explanation:
// To the right of 5 there are2 smaller elements (2 and 1).
// To the right of 2 there is only1 smaller element (1).
// To the right of 6 there is1 smaller element (1).
// To the right of 1 there is0 smaller element.

// **Example 2:**
// Input: nums = [-1]
// Output: [0]

// **Example 3:**
// Input: nums = [-1,-1]
// Output: [0,0]

// **Constraints:**
// - `1 <= nums.length <= 100000`
// - `-10000 <= nums[i] <= 10000`

var countSmaller = (nums) => {
  let sorted = [],
    result = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    let left = 0,
      right = sorted.length;
    while (left < right) {
      let mid = left + Math.floor((right - left) / 2);
      if (nums[i] > sorted[mid]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    result.unshift(left);
    sorted.splice(left, 0, nums[i]);
  }
  return result;
};

// Example 1:
console.log(countSmaller([5, 2, 6, 1]));
// Output: [2, 1, 1, 0]

// Example 2:
console.log(countSmaller([-1]));
// Output: [0]

// Example 3:
console.log(countSmaller([-1, -1]));
// Output: [0, 0]