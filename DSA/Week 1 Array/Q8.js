// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

// Example 1:
// Input: nums = [1,2,2,4]
// Output: [2,3]

const findErrorNums = (nums) => {
  const n = nums.length;
  const countMap = new Map();

  let duplicate, missing;

  for (let num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  for (let i = 1; i <= n; i++) {
    const count = countMap.get(i) || 0;
    if (count === 2) {
      duplicate = i;
    } else if (count === 0) {
      missing = i;
    }
  }

  return [duplicate, missing];
};

let nums = [1, 2, 2, 4];
let result = findErrorNums(nums);
console.log(result);
// Output: [2, 3]
