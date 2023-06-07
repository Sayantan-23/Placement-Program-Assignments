// Given two strings s and goal, return true *if and only if* s *can become* goal *after some number of **shifts** on* s.

// A **shift** on s consists of moving the leftmost character of s to the rightmost position.

// - For example, if s = "abcde", then it will be "bcdea" after one shift.

// **Example 1:**

// **Input:** s = "abcde", goal = "cdeab"

// **Output:**

// true

const rotateString = (s, goal) => {
  if (s.length !== goal.length) return false;

  const concatenated = s + s;
  return concatenated.includes(goal);
};

const s = "abcde";
const goal = "cdeab";
console.log(rotateString(s, goal));
// Output: true
