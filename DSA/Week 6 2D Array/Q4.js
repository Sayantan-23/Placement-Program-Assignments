// Given a binary array nums, return *the maximum length of a contiguous subarray with an equal number of* 0 *and* 1.

// **Example 1:**

// **Input:** nums = [0,1]

// **Output:** 2

// **Explanation:**

// [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.


function findMaxLength(nums) {
  const n = nums.length;
  let maxLength = 0;
  let count = 0;
  const countMap = new Map();

  countMap.set(0, -1); 

  for (let i = 0; i < n; i++) {
    count += nums[i] === 1 ? 1 : -1;

    if (countMap.has(count)) {
      maxLength = Math.max(maxLength, i - countMap.get(count));
    } else {
      countMap.set(count, i);
    }
  }

  return maxLength;
}

const nums = [0, 1];
const maxLength = findMaxLength(nums);
console.log(maxLength);
// Output: 2
