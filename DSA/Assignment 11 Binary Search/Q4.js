// Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive.

// There is only **one repeated number** in `nums`, return *this repeated number*.

// You must solve the problem **without** modifying the array `nums` and uses only constant extra space.

// **Example 1:**
// Input: nums = [1,3,4,2,2]
// Output: 2

// ** Example 2:**
// Input: nums = [3,1,3,4,2]
// Output: 3

const findDuplicate = (nums) => {
  let left = 1;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let count = 0;

    for (let num of nums) {
      if (num <= mid) {
        count++;
      }
    }

    if (count > mid) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

console.log(findDuplicate([1, 3, 4, 2, 2]));
// Output: 2
console.log(findDuplicate([3, 1, 3, 4, 2]));
// Output: 3
