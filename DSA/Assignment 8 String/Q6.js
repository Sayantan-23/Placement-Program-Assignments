// Given two strings s and p, return *an array of all the start indices of* p*'s anagrams in* s. You may return the answer in **any order**.

// An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// **Example 1:**

// **Input:** s = "cbaebabacd", p = "abc"

// **Output:** [0,6]

// **Explanation:**

// The substring with start index = 0 is "cba", which is an anagram of "abc".

// The substring with start index = 6 is "bac", which is an anagram of "abc".

const findAnagrams = (s, p) => {
  const result = [];
  const freqMapP = new Array(26).fill(0);
  const freqMapS = new Array(26).fill(0);
  const aCharCode = "a".charCodeAt(0);

  for (let i = 0; i < p.length; i++) {
    freqMapP[p.charCodeAt(i) - aCharCode]++;
  }

  let left = 0;
  let right = 0;
  let count = 0;

  while (right < s.length) {
    freqMapS[s.charCodeAt(right) - aCharCode]++;

    if (
      freqMapS[s.charCodeAt(right) - aCharCode] <=
      freqMapP[s.charCodeAt(right) - aCharCode]
    ) {
      count++;
    }

    if (count === p.length) {
      result.push(left);
    }

    if (right - left + 1 === p.length) {
      freqMapS[s.charCodeAt(left) - aCharCode]--;
      if (
        freqMapS[s.charCodeAt(left) - aCharCode] <
        freqMapP[s.charCodeAt(left) - aCharCode]
      ) {
        count--;
      }
      left++;
    }

    right++;
  }

  return result;
};

const s = "cbaebabacd";
const p = "abc";
console.log(findAnagrams(s, p));
// Output: [0, 6]
