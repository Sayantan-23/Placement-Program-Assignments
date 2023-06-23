// Given a **circular integer array** `nums` of length `n`, return *the maximum possible sum of a non-empty **subarray** of* `nums`.

// A **circular array** means the end of the array connects to the beginning of the array. Formally, the next element of `nums[i]` is `nums[(i + 1) % n]` and the previous element of `nums[i]` is `nums[(i - 1 + n) % n]`.

// A **subarray** may only include each element of the fixed buffer `nums` at most once. Formally, for a subarray `nums[i], nums[i + 1], ..., nums[j]`, there does not exist `i <= k1`, `k2 <= j` with `k1 % n == k2 % n`.

// **Example 1:**
// Input: nums = [1,-2,3,-2]
// Output: 3
// Explanation: Subarray [3] has maximum sum 3.

// **Example 2:**
// Input: nums = [5,-3,5]
// Output: 10
// Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10.

// **Example 3:**
// Input: nums = [-3,-2,-3]
// Output: -2
// Explanation: Subarray [-2] has maximum sum -2.

const kadaneAlgorithm = (nums) => {
  let maxSum = nums[0];
  let currentMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    maxSum = Math.max(maxSum, currentMax);
  }

  return maxSum;
};

const maxSubarraySumCircular = (nums) => {
  const maxKadane = kadaneAlgorithm(nums);
  let totalSum = 0;

  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
    nums[i] = -nums[i];
  }

  const minKadane = -kadaneAlgorithm(nums);

  if (minKadane === totalSum) {
    return maxKadane;
  }

  return Math.max(maxKadane, totalSum - minKadane);
};

const nums = [1, -2, 3, -2];
console.log(maxSubarraySumCircular(nums));
// Output: 3
const nums2 = [5, -3, 5];
console.log(maxSubarraySumCircular(nums2));
// Output: 10
const nums3 = [-3, -2, -3];
console.log(maxSubarraySumCircular(nums3));
// Output: -2
