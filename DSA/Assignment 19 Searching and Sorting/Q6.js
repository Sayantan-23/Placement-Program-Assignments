// Given two sorted arrays, the task is to merge them in a sorted manner.

// **Examples:**
// Input: arr1[] = { 1, 3, 4, 5}, arr2[] = {2, 4, 6, 8}
// Output: arr3[] = {1, 2, 3, 4, 4, 5, 6, 8}

// Input: arr1[] = { 5, 8, 9}, arr2[] = {4, 7, 8}
// Output: arr3[] = {4, 5, 7, 8, 8, 9}

const mergeSortedArrays =(arr1, arr2)=> {
  let mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

let arr1 = [1, 3, 4, 5];
let arr2 = [2, 4, 6, 8];
console.log(mergeSortedArrays(arr1, arr2));
// Output: [1, 2, 3, 4, 4, 5, 6, 8]

let arr3 = [5, 8, 9];
let arr4 = [4, 7, 8];
console.log(mergeSortedArrays(arr3, arr4));
// Output: [4, 5, 7, 8, 8, 9]
