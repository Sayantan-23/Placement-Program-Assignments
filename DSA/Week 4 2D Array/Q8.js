// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// *Return the array in the form* [x1,y1,x2,y2,...,xn,yn].

// **Example 1:**

// **Input:** nums = [2,5,1,3,4,7], n = 3

// **Output:** [2,3,5,4,1,7]

// **Explanation:** Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

const shuffle = (nums, n) => {
  const result = [];

  let i = 0;
  let j = n;

  while (i < n) {
    result.push(nums[i]); 
    result.push(nums[j]); 
    i++;
    j++;
  }

  return result;
};

const nums = [2, 5, 1, 3, 4, 7];
const n = 3;
const result = shuffle(nums, n);
console.log(result);
// Output: [2, 3, 5, 4, 1, 7]
