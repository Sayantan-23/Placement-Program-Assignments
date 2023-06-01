// You are given an integer array nums and an integer k.

// In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

// The score of nums is the difference between the maximum and minimum elements in nums.

// Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

// Example 1:
// Input: nums = [1], k = 0
// Output: 0

// Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.

const smallestRange = (nums, k) => {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  const maxPossible = nums[n - 1] - k;
  const minPossible = nums[0] + k;

  if (minPossible >= maxPossible) {
    return 0;
  } else {
    return maxPossible - minPossible;
  }
};

const nums = [1];
const k = 0;
const minScore = smallestRange(nums, k);
console.log(minScore);
// Output: 0
