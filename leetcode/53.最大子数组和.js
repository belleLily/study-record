// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 子数组 是数组中的一个连续部分。

// 我不理解
// var maxSubArray = function (nums) {
//   let pre = 0,
//     maxAns = nums[0];
//   nums.forEach((x) => {
//     pre = Math.max(pre + x, x);
//     maxAns = Math.max(maxAns, pre);
//   });
//   return maxAns;
// };

// var maxSubArray = function (nums) {
//   var max = 0;
//   var sum = 0;
//   nums.forEach((x) => {
//     sum = sum + x < 0 ? 0 : sum + x;
//     max = Math.max(max, sum);
//   });
//   return max;
// };

var maxSubArray = function (nums) {
  var max = nums[0];
  var sum = 0;
  nums.forEach((x) => {
    if (sum > 0) {
      sum += x;
    } else {
      sum = x;
    }
    max = Math.max(sum, max);
  });
  return max;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4, 3]));
