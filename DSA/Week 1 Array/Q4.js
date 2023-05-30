// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// **Example 1:**
// Input: digits = [1,2,3]
// Output: [1,2,4]

// **Explanation:** The array represents the integer 123.

// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

const plusOne = (digits) => {
  if (!digits) return 0;

  for (let index = digits.length - 1; index >= 0; index--) {
    digits[index]++;

    if (digits[index] === 10) {
      digits[index] = 0;
    } else {
      return digits;
    }
  }
  digits.unshift(1);

  return digits;
};

let digits = [1, 2, 3]
digits = plusOne(digits)
console.log(digits);
// Output : [1,2,4]
