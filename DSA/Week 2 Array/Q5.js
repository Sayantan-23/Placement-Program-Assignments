// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Example 1:
// Input: nums = [1,2,3]
// Output: 6

const maximumProduct = (nums) => {
  nums.sort((a, b) => a - b);

  const firstOption = nums[nums.length - 1] * nums[1] * nums[0];
  const secondOption =
    nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3];

  return Math.max(firstOption, secondOption);
};

const nums = [1, 2, 3];
const maxProduct = maximumProduct(nums);
console.log(maxProduct);
// Output: 6
