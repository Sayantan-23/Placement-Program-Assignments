// Given a string S, the task is to write a program to print all permutations of a given string.

// **Example 1:**

// ***Input:***

// *S = “ABC”*

// ***Output:***

// *“ABC”, “ACB”, “BAC”, “BCA”, “CBA”, “CAB”*

// **Example 2:**

// ***Input:***

// *S = “XY”*

// ***Output:***

// *“XY”, “YX”*

const swap = (str, i, j) => {
  const charArray = str.split("");
  const temp = charArray[i];
  charArray[i] = charArray[j];
  charArray[j] = temp;
  return charArray.join("");
};

const generatePermutations = (str, left, right, result) => {
  if (left === right) {
    result.push(str);
    return;
  }

  for (let i = left; i <= right; i++) {
    const swapped = swap(str, left, i);
    generatePermutations(swapped, left + 1, right, result);
  }
};

const printPermutations = (S) => {
  const result = [];
  generatePermutations(S, 0, S.length - 1, result);
  return result;
};

console.log(printPermutations('ABC'));
// Output: ["ABC", "ACB", "BAC", "BCA", "CBA", "CAB"]
console.log(printPermutations('XY'));
// Output: ["XY", "YX"]
