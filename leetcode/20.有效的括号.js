/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) {
    return false;
  }
  var replaceS = s.replace(/\{\}|\[\]|\(\)/g, "");
  if (replaceS.length === 0) {
    return true;
  } else if (s.length === replaceS.length) {
    return false;
  } else {
    return isValid(replaceS);
  }
};

var isValid1 = function (s) {
  if (s.length % 2 !== 0) {
    return false;
  }
  var map = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  var stack = [];
  for (var i in s) {
    // 如果是右括号
    if (map[s[i]]) {
      if (stack.length === 0 || stack[stack.length - 1] !== map[s[i]]) {
        return false;
      } else {
        stack.pop();
      }
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
};

var s = "()[]{}";
var s = "([)]";
var s = "(){}}{";
var s = "{[]}";
var s = "(([]){})";
console.log(isValid(s));
