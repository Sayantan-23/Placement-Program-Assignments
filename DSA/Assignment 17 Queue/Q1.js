// Given a string `s`, *find the first non-repeating character in it and return its index*. If it does not exist, return `-1`.

// **Example 1:**
// Input: s = "leetcode"
// Output: 0

// **Example 2:**
// Input: s = "loveleetcode"
// Output: 2

// **Example 3:**
// Input: s = "aabb"
// Output: -1

const firstUniqueChar = (s) => {
  const frequencyMap = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    frequencyMap[char] = (frequencyMap[char] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (frequencyMap[char] === 1) {
      return i;
    }
  }

  return -1;
};

// Example usage:
console.log(firstUniqueChar("leetcode"));
// Output: 0
console.log(firstUniqueChar("loveleetcode"));
// Output: 2
console.log(firstUniqueChar("aabb"));
// Output: -1
