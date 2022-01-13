/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (!needle) return 0
    var needLen = needle.length
    for (var i = 0; i < haystack.length; i++){
        if (haystack[i] === needle[0] && haystack.substring(i, i+needLen) === needle) {
            return i
        }
    }
    return -1
};
console.log(strStr("hello", 'llo'));