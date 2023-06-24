// Given an integer array `nums`, return *the maximum difference between two successive elements in its sorted form*. If the array contains less than two elements, return `0`.

// You must write an algorithm that runs in linear time and uses linear extra space.

// **Example 1:**
// Input: nums = [3,6,9,1]
// Output: 3
// Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.

// **Example 2:**
// Input: nums = [10]
// Output: 0
// Explanation: The array contains less than 2 elements, therefore return 0.

// **Constraints:**

// - `1 <= nums.length <= 10^5`
// - `0 <= nums[i] <= 10^9`

const maximumGap = (nums) => {
  const n = nums.length;

  if (n < 2) {
    return 0;
  }

  if (n < 3) {
    return Math.abs(nums[0] - nums[1]);
  }

  let maxNum = -Infinity;
  let minNum = +Infinity;

  for (let i = 0; i < n; i++) {
    maxNum = Math.max(maxNum, nums[i]);
    minNum = Math.min(minNum, nums[i]);
  }

  if (maxNum === minNum) {
    return 0;
  }

  const k = n - 1;
  const averageGap = (maxNum - minNum) / k;

  const minBuckets = new Array(k);
  const maxBuckets = new Array(k);

  minBuckets[0] = minNum;
  maxBuckets[0] = minNum;

  minBuckets[k - 1] = maxNum;
  maxBuckets[k - 1] = maxNum;

  for (let i = 0; i < n; i++) {
    if (minNum === nums[i] || nums[i] === maxNum) {
      continue;
    }

    const j = Math.floor((nums[i] - minNum) / averageGap);

    minBuckets[j] = minBuckets[j] ? Math.min(minBuckets[j], nums[i]) : nums[i];
    maxBuckets[j] = maxBuckets[j] ? Math.max(maxBuckets[j], nums[i]) : nums[i];
  }

  let largestGap = 0;
  let prevMaxIndex = 0;

  for (let i = 1; i < n - 1; i++) {
    if (minBuckets[i]) {
      largestGap = Math.max(
        largestGap,
        minBuckets[i] - maxBuckets[prevMaxIndex]
      );
    }

    if (maxBuckets[i]) {
      prevMaxIndex = i;
    }
  }

  return largestGap;
};

const nums = [3, 6, 9, 1];
const maxGap = maximumGap(nums);
console.log(maxGap);

const nums2 = [10];
const maxGap2 = maximumGap(nums2);
console.log(maxGap2);