/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  if (nums.length === 0) return 0;
  var slowIdx = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[slowIdx] = nums[i + 1];
    } else {
      nums[slowIdx] = nums[i];
      slowIdx++;
    }
  }
  console.log(nums);
  return slowIdx;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
