/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0
    var slowIdx = 0;
    for (var i = 0; i < nums.length - 1; i++){
        if (nums[i] !== nums[i + 1]) {
            nums[++slowIdx] = nums[i + 1]
        }
    }
    console.log(nums)
    return slowIdx + 1
};

removeDuplicates([1, 1, 2]);