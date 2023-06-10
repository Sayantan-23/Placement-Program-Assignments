// Given a string **str**, the task is to print all the permutations of **str**. A **permutation** is an arrangement of all or part of a set of objects, with regard to the order of the arrangement. For instance, the words ‘bat’ and ‘tab’ represents two distinct permutation (or arrangements) of a similar three letter word.

// **Examples:**

// Input: str = “cd”

// **Output:** cd dc

// **Input:** str = “abb”

// **Output:** abb abb bab bba bab bba

const swap = (str, i, j) => {
  let charArray = str.split("");
  let temp = charArray[i];
  charArray[i] = charArray[j];
  charArray[j] = temp;
  return charArray.join("");
};

const permutations = (str, left, right, result) => {
  if (left === right) {
    result.push(str);
  } else {
    for (let i = left; i <= right; i++) {
      str = swap(str, left, i);
      permutations(str, left + 1, right, result);
      str = swap(str, left, i); 
    }
  }
};

const printPermutations = (str) => {
  const result = [];
  const n = str.length;
  permutations(str, 0, n - 1, result);
  return result;
};

const input = "abb";
const permutationsList = printPermutations(input);
console.log(permutationsList.join(" "));
