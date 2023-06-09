// Given a set represented as a string, write a recursive code to print all subsets of it. The subsets can be printed in any order.

// **Example 1:**

// Input :  set = “abc”

// Output : { “”, “a”, “b”, “c”, “ab”, “ac”, “bc”, “abc”}

// **Example 2:**

// Input : set = “abcd”

// Output : { “”, “a” ,”ab” ,”abc” ,”abcd”, “abd” ,”ac” ,”acd”, “ad” ,”b”, “bc” ,”bcd” ,”bd” ,”c” ,”cd” ,”d” }

const printSubsets = (set, currentSubset = "", index = 0) => {
  if (index === set.length) {
    console.log(currentSubset);
    return;
  }

  printSubsets(set, currentSubset, index + 1);
  printSubsets(set, currentSubset + set[index], index + 1);
};

printSubsets("abc");
// Output : { “”, “a” ,”ab” ,”abc” ,”abcd”, “abd” ,”ac” ,”acd”, “ad” ,”b”, “bc” ,”bcd” ,”bd” ,”c” ,”cd” ,”d” }
