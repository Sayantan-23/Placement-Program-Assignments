const moveZeroes = (nums) => {
  let p = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[p] = nums[i];
      p++;
    }
  }

  for (let i = p; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};

let nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums));
// Output : [ 1, 3, 12, 0, 0 ]
