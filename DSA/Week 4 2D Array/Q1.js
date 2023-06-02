// Given three integer arrays arr1, arr2 and arr3 **sorted** in **strictly increasing** order, return a sorted array of **only** the integers that appeared in **all** three arrays.

// **Example 1:**

// Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]

// Output: [1,5]

// **Explanation:** Only 1 and 5 appeared in the three arrays.

const commonElements = (arr1, arr2, arr3) => {
  const result = [];
  let ptr1 = 0,
    ptr2 = 0,
    ptr3 = 0;

  while (ptr1 < arr1.length && ptr2 < arr2.length && ptr3 < arr3.length) {
    const num1 = arr1[ptr1];
    const num2 = arr2[ptr2];
    const num3 = arr3[ptr3];

    if (num1 === num2 && num2 === num3) {
      result.push(num1);
      ptr1++;
      ptr2++;
      ptr3++;
    } else {
      const minNum = Math.min(num1, num2, num3);

      if (num1 === minNum) {
        ptr1++;
      }
      if (num2 === minNum) {
        ptr2++;
      }
      if (num3 === minNum) {
        ptr3++;
      }
    }
  }

  return result;
};

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 5, 7, 9];
const arr3 = [1, 3, 4, 5, 8];
const result = commonElements(arr1, arr2, arr3);
console.log(result);
// Output: [1, 5]
