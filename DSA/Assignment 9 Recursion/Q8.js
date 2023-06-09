// Given an array, find a product of all array elements.

// **Example 1:**

// Input  : arr[] = {1, 2, 3, 4, 5}
// Output : 120
// **Example 2:**

// Input  : arr[] = {1, 6, 3}
// Output : 18

const getProduct = (arr, index = 0) => {
  if (index === arr.length) {
    return 1;
  }

  return arr[index] * getProduct(arr, index + 1);
};

console.log(getProduct([1, 2, 3, 4, 5]));
// Output: 120
console.log(getProduct([1, 6, 3]));
// Output: 18
