// Given an array `nums` with `n` objects colored red, white, or blue, sort them **[in-place](https://en.wikipedia.org/wiki/In-place_algorithm)** so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers `0`, `1`, and `2` to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// **Example 1:**
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// **Example 2:**
// Input: nums = [2,0,1]
// Output: [0,1,2]

// **Constraints:**
// - `n == nums.length`
// - `1 <= n <= 300`
// - `nums[i]` is either `0`, `1`, or `2`.

const sortColors = (nums) => {
  let left = 0;
  let current = 0;
  let right = nums.length - 1;
  while (current <= right) {
    if (nums[current] === 0) {
      swap(nums, left, current);
      left++;
      current++;
    } else if (nums[current] === 2) {
      swap(nums, current, right);
      right--;
    } else {
      current++;
    }
  }
};

let swap = function (nums, left, current) {
  let temp = nums[left];
  nums[left] = nums[current];
  nums[current] = temp;
};

// Example 1:
const nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
console.log(nums);

// Example 2:
const nums2 = [2, 0, 1];
sortColors(nums2);
console.log(nums2);
