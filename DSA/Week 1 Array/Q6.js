// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]

// Output: true

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
