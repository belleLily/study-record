/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
  var tmpIdx = 0;
  var search = function (nums, target) {
    var idx = Math.floor(nums.length / 2);
    if (target === nums[idx]) {
      return tmpIdx + idx;
    } else if (idx <= 0) {
      return target > nums[idx] ? tmpIdx + 1 : tmpIdx;
    } else if (target >= nums[idx]) {
      tmpIdx += idx;
      return search(nums.slice(idx), target);
    } else {
      return search(nums.slice(0, idx), target);
    }
  };
  return search(nums, target);
};

var searchInset = function (nums, target) {
  var l = 0,
    r = nums.length - 1;
  while (l <= r) {
    var mid = l + Math.floor((r - l) / 2);
    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return l;
};

console.log(searchInsert([1, 3, 5, 6], 5));
