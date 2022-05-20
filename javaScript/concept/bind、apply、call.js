function add(c, d) {
  return this.a + this.b + c + d;
}

const obj = { a: 1, b: 2 };
console.error(add.call(obj, 3, 4)); // 10

// 1.给o对象添加一个add属性，这个时候 this 就指向了 o，
// 2.o.add(5,7)得到的结果和add.call(o, 5, 6)相同。
// 3.但是给对象o添加了一个额外的add属性，这个属性我们是不需要的，所以可以使用delete删除它
const o = {
  a: 1,
  b: 2,
  add: function (c, d) {
    return this.a + this.b + c + d;
  },
};

Function.prototype.call = function (context) {
  let context = context || window;
  context.fn = this;
  let args = [...arguments].slice(1);
  // for (let i = 1, len = arguments.length; i < len; i++) {  
  //   args.push(arguments[i]);
  // }
  return context.fn(...args);
};
Function.prototype.apply = function (context, arr) {
  let context = context || window;
  context.fn = this;
  let result;
  if (!arr) {
    result = context.fn();
  } else {
    if (!(arr instanceof Array)) throw new Error("params must be array");
    result = context.fn(...arr);
  }
  delete context.fn;
  return result;
};
// Function.prototype.bind = function (context, ...rest) {
//   if (typeof this !== "function") throw new TypeError("invalid invoked!");
//   let self = this;
//   return function F(...args) {
//     if (this instanceof F) {
//       return new self(...rest, ...args);
//     }
//     return self.apply(context, rest.concat(args));
//   };
// };
Function.prototype.bind = function () {
  let self = this;
  let [context, ...args] = arguments;
    // context = Array.prototype.shift.call(arguments),
    // 上一行等价于 context = [].shift.call(arguments);
    // args = Array.prototype.slice.call(arguments);
  return function () {
    // 返回一个新函数
    self.apply(
      context,
      [...args, ...arguments]
      // Array.prototype.concat.call(args, Array.prototype.slice.call(arguments))
    );
  };
};
