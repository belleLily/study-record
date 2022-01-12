/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  return Array.isArray(strs) &&
    strs.reduce((total, item, idx) => {
      let sum = "";
      let i = 0;
      if (idx === 0) {
        return item;
      } else {
        while (total[i]) {
          if (total[i] === item[i]) {
            sum += total[i];
            i++;
          } else {
            return sum;
          }
        }
        return sum;
      }
    }, "");
};

var strs = [];
console.log(longestCommonPrefix(strs));
