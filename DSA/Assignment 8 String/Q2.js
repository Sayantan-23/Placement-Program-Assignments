// Given a string s containing only three types of characters: '(', ')' and '*', return true *if* s *is **valid***.

// The following rules define a **valid** string:

// - Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// - Any right parenthesis ')' must have a corresponding left parenthesis '('.
// - Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// - '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

// **Example 1:**

// **Input:** s = "()"

// **Output:**

// true

const checkValidString = (s) => {
  let left_min = 0;
  let left_max = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      left_min++;
      left_max++;
    }
    if (s[i] == ")") {
      left_min--;
      left_max--;
    }
    if (s[i] == "*") {
      left_min--;
      left_max++;
    }
    if (left_min < 0) {
      left_min = 0;
    }
    if (left_max < 0) {
      return false;
    }
  }
  if (left_min == 0 || left_max == 0) {
    return true;
  } else {
    return false;
  }
};

const s = "()";
console.log(isValid(s));
// Output: true
