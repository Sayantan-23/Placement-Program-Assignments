// Given two strings s and goal, return true *if you can swap two letters in* s *so the result is equal to* goal*, otherwise, return* false*.*

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

// - For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

// **Example 1:**

// **Input:** s = "ab", goal = "ba"

// **Output:** true

// **Explanation:** You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

const buddyStrings = (s, goal) => {
  const hashmap = {};
  let indexOfFirstWrong;
  let output = false;
  let hasDuplicate = false;
  let numberOfWrongCharacter = 0;

  for (let i = 0; i < goal.length; i++) {
    if (goal[i] !== s[i] && indexOfFirstWrong === undefined) {
      indexOfFirstWrong = i;
      numberOfWrongCharacter++;
    } else if (goal[i] !== s[i] && indexOfFirstWrong !== undefined) {
      output =
        goal[i] === s[indexOfFirstWrong] && goal[indexOfFirstWrong] === s[i];
      numberOfWrongCharacter++;
      if (numberOfWrongCharacter > 2) return false;
    }

    if (hashmap[s[i]]) hasDuplicate = true;

    hashmap[s[i]] = 1;
  }

  if (!numberOfWrongCharacter && hasDuplicate) return true;

  return output;
};

const s = "ab";
const goal = "ba";
console.log(buddyStrings(s, goal));
// Output: true
