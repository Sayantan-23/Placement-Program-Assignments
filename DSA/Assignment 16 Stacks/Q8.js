// Given an array of integers, the task is to find the maximum absolute difference between the nearest left and the right smaller element of every element in the array.

// **Note:** If there is no smaller element on right side or left side of any element then we take zero as the smaller element. For example for the leftmost element, the nearest smaller element on the left side is considered as 0. Similarly, for rightmost elements, the smaller element on the right side is considered as 0.

// **Examples:**
// Input : arr[] = {2, 1, 8}
// Output : 1
// Left smaller  LS[] {0, 0, 1}
// Right smaller RS[] {1, 0, 0}
// Maximum Diff of abs(LS[i] - RS[i]) = 1

// Input  : arr[] = {2, 4, 8, 7, 7, 9, 3}
// Output : 4
// Left smaller   LS[] = {0, 2, 4, 4, 4, 7, 2}
// Right smaller  RS[] = {0, 3, 7, 3, 3, 3, 0}
// Maximum Diff of abs(LS[i] - RS[i]) = 7 - 3 = 4

// Input : arr[] = {5, 1, 9, 2, 5, 1, 7}
// Output : 1

const maxAbsoluteDifference = (arr) => {
  const n = arr.length;
  const leftSmaller = [];
  const rightSmaller = [];

  const leftStack = [];
  for (let i = 0; i < n; i++) {
    while (leftStack.length > 0 && leftStack[leftStack.length - 1] >= arr[i]) {
      leftStack.pop();
    }

    if (leftStack.length === 0) {
      leftSmaller.push(0);
    } else {
      leftSmaller.push(leftStack[leftStack.length - 1]);
    }

    leftStack.push(arr[i]);
  }

  const rightStack = [];
  for (let i = n - 1; i >= 0; i--) {
    while (
      rightStack.length > 0 &&
      rightStack[rightStack.length - 1] >= arr[i]
    ) {
      rightStack.pop();
    }

    if (rightStack.length === 0) {
      rightSmaller[i] = 0;
    } else {
      rightSmaller[i] = rightStack[rightStack.length - 1];
    }

    rightStack.push(arr[i]);
  }

  let maxDiff = 0;
  for (let i = 0; i < n; i++) {
    const diff = Math.abs(leftSmaller[i] - rightSmaller[i]);
    maxDiff = Math.max(maxDiff, diff);
  }

  return maxDiff;
};

const arr1 = [2, 1, 8];
console.log(maxAbsoluteDifference(arr1));
// Output: 1

const arr2 = [2, 4, 8, 7, 7, 9, 3];
console.log(maxAbsoluteDifference(arr2));
// Output: 4

const arr3 = [5, 1, 9, 2, 5, 1, 7];
console.log(maxAbsoluteDifference(arr3));
// Output: 1
