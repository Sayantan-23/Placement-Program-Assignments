// Given a string, count total number of consonants in it. A consonant is an English alphabet character that is not vowel (a, e, i, o and u). Examples of constants are b, c, d, f, and g.

// ** Examples :**

// Input : abc de
// Output : 3
// There are three consonants b, c and d.

// Input : geeksforgeeks portal
// Output : 12

const isConsonant = (char) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return !vowels.includes(char.toLowerCase());
};

const countConsonants = (str, index = 0) => {
  if (index === str.length - 1) {
    return 0;
  }

  const currentChar = str[index];
  const count = countConsonants(str, index + 1);

  return isConsonant(currentChar) ? count + 1 : count;
};

const input = "geeksforgeeks portal";
const consonantCount = countConsonants(input);
console.log(consonantCount);
