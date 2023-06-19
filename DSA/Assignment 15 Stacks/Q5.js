// You are given a string **S**, the task is to reverse the string using stack.

// **Example 1:**
// Input: S="GeeksforGeeks"
// Output: skeeGrofskeeG

const reverseString = (S) => {
  const stack = [];

  for (var i = 0; i < S.length; i++) {
    stack.push(S[i]);
  }

  let reversedString = "";

  while (stack.length > 0) {
    reversedString += stack.pop();
  }

  return reversedString;
};

const S = "GeeksforGeeks";
const reversed = reverseString(S);
console.log(reversed);
// Output: skeeGrofskeeG
