// Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must appear as many times as it shows in both arrays and you may return the result in **any order**.

// **Example 1:**
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// ** Example 2:**
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

const intersect = (nums1, nums2) => {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  const result = [];

  let i = 0;
  while (i < nums1.length) {
    const num = nums1[i];
    const foundIndex = binarySearch(nums2, num);
    if (foundIndex !== -1) {
      result.push(num);
      nums2.splice(foundIndex, 1);
    }
    i++;
  }

  return result;
};

const binarySearch = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
// Output: [2, 2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
// Output: [4, 9]
