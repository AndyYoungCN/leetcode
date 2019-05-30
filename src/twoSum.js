/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let numLength = nums.length;
  for (let i1 = 0; i1 < numLength; i1++) {
    for (let i2 = i1 + 1; i2 < numLength; i2++) {
      if (target === nums[i1] + nums[i2]) {
        return [i1, i2];
      }
    }
  }
  return false;
};

let res = twoSum([2, 7, 11, 15], 9);
console.log(res);
