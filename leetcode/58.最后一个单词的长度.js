/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  var res = s.split(/\s+/).filter((item) => !!item);
  return res[res.length - 1].length;
};

var lengthOfLastWord = function (s) {
  var idx = s.length - 1;
  while (s[idx] === " ") {
    idx--;
  }
  var wordLen = 0;
  while (idx >= 0 && s[idx] !== " ") {
    wordLen++;
    idx--;
  }
  return wordLen;
};
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
