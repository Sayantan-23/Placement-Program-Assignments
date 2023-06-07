// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// **Example 1:**

// **Input:** s = "Let's take LeetCode contest"

// **Output:** "s'teL ekat edoCteeL tsetnoc"

const reverseWords = (s) => {
  const arr = s.trim().split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("").reverse().join("");
  }
  return arr.join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"));
// Output: s'teL ekat edoCteeL tsetnoc