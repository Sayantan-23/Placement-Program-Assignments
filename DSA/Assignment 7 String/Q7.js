// Given two strings s and t, return true *if they are equal when both are typed into empty text editors*. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// **Example 1:**

// **Input:** s = "ab#c", t = "ad#c"

// **Output:** true

// **Explanation:**

// Both s and t become "ac".

const buildString = (str) => {
  const stack = [];

  for (const c of str) {
    if (c !== "#") {
      stack.push(c);
    } else if (stack.length > 0) {
      stack.pop();
    }
  }

  return stack.join("");
};

const backspaceCompare = (s, t) => {
  const processedS = buildString(s);
  const processedT = buildString(t);

  return processedS === processedT;
};

const s = "ab#c";
const t = "ad#c";
console.log(backspaceCompare(s, t));
// Output: true
