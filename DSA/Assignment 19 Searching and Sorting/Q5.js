// Given an **array of positive** and **negative numbers**, arrange them in an **alternate** fashion such that every positive number is followed by a negative and vice-versa maintaining the **order of appearance**. The number of positive and negative numbers need not be equal. If there are more positive numbers they appear at the end of the array. If there are more negative numbers, they too appear at the end of the array.

// **Examples:**

// Input:  arr[] = {1, 2, 3, -4, -1, 4}
// Output: arr[] = {-4, 1, -1, 2, 3, 4}

// Input:  arr[] = {-5, -2, 5, 2, 4, 7, 1, 8, 0, -8}
// Output: arr[] = {-5, 5, -2, 2, -8, 4, 7, 1, 8, 0}

const alternateArrange = (arr) => {
  let positive = [];
  let negative = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      positive.push(arr[i]);
    } else {
      negative.push(arr[i]);
    }
  }

  let result = [];
  let pIndex = 0;
  let nIndex = 0;

  while (pIndex < positive.length && nIndex < negative.length) {
    result.push(negative[nIndex]);
    result.push(positive[pIndex]);
    nIndex++;
    pIndex++;
  }

  while (pIndex < positive.length) {
    result.push(positive[pIndex]);
    pIndex++;
  }

  while (nIndex < negative.length) {
    result.push(negative[nIndex]);
    nIndex++;
  }

  return result;
};

let arr1 = [1, 2, 3, -4, -1, 4];
console.log(alternateArrange(arr1));
// Output: [-4, 1, -1, 2, 3, 4]

let arr2 = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8];
console.log(alternateArrange(arr2));
// Output: [-5, 5, -2, 2, -8, 4, 7, 1, 8, 0]
