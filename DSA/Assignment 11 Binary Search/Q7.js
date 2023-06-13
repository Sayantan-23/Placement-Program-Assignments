// Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value.

// If `target` is not found in the array, return `[-1, -1]`.

// You must write an algorithm with `O(log n)` runtime complexity.

// **Example 1:**
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// **Example 2:**
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// ** Example 3:**
// Input: nums = [], target = 0
// Output: [-1,-1]

const searchRange = (nums, target) => {
  let left = findFirstPosition(nums, target);
  if (left === -1) {
    return [-1, -1];
  }
  let right = findLastPosition(nums, target);
  return [left, right];
};

const findFirstPosition = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let result = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      right = mid - 1;
      if (nums[mid] === target) {
        result = mid;
      }
    } else {
      left = mid + 1;
    }
  }

  return result;
};

const findLastPosition = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let result = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] <= target) {
      left = mid + 1;
      if (nums[mid] === target) {
        result = mid;
      }
    } else {
      right = mid - 1;
    }
  }

  return result;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
// Output: [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
// Output: [-1, -1]
console.log(searchRange([], 0));
// Output: [-1, -1]
