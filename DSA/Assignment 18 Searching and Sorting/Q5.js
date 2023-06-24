// Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.

// **Example 1:**
// Input: nums = [1,2,3,1]
// Output: true

// **Example 2:**
// Input: nums = [1,2,3,4]
// Output: false

// **Example 3:**
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// **Constraints:**

// - `1 <= nums.length <= 10^5`
// - `109 <= nums[i] <= 10^9`

const containsDuplicate = (nums) => {
  const set = new Set();

  for (let i of nums) {
    if (set.has(i)) {
      return true;
    }
    set.add(i);
  }
  return false;
};

const nums1 = [1, 2, 3, 1];
console.log(containsDuplicate(nums1));
// Output: true

const nums2 = [1, 2, 3, 4];
console.log(containsDuplicate(nums2));
// Output: false

const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(nums3));
// Output: true
