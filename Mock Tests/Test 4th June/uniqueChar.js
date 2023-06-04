function firstUniqChar(s) {
  const charCount = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charCount.get(char) === 1) {
      return i;
    }
  }

  return -1; 
}


console.log(firstUniqChar("leetcode"));
// Output: 0
console.log(firstUniqChar("loveleetcode"));
// Output: 2
console.log(firstUniqChar("aabb"));
// Output: -1
