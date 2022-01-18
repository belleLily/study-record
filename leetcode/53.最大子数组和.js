// 我不理解
var maxSubArray = function (nums) {
  let pre = 0,
    maxAns = nums[0];
  nums.forEach((x) => {
    pre = Math.max(pre + x, x);
    maxAns = Math.max(maxAns, pre);
  });
  return maxAns;
};

// var maxSubArray = function (nums) {
//   var max = 0;
//   var sum = 0;
//   nums.forEach((x) => {
//     sum = sum + x < 0 ? 0 : sum + x;
//     max = Math.max(max, sum);
//   });
//   return max;
// };
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4, 3]));
