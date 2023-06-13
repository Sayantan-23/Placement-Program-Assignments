// Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must be **unique** and you may return the result in **any order**.

// **Example 1:**
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// ** Example 2:**
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

const intersection = (nums1, nums2) => {
  let result = [];
  nums2.sort((a, b) => a - b);

  // we will loop in first array and will binary search that in second array
  for (let temp of nums1) {
    binarySearch(temp, nums2, result);
  }
  return result;
};
const binarySearch = (target, nums2, result) => {
  let start = 0;
  let end = nums2.length - 1;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (target == nums2[mid]) {
      if (!result.includes(target)) {
        result.push(target);
      }
      break;
    } else if (target < nums2[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
// Output: [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
// Output: [4, 9]
