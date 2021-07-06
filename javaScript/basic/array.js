concat();
copyWithin(); //浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。
entries();
fill();
filter();
find(); //方法返回通过测试（函数内判断）的数组的第一个元素的值。
findIndex();
flat();
flatMap();
forEach();
includes(); //return boolean
indexOf();
join();
keys();
lastIndexOf();
map();
pop();
push();
reduce();
reduceRight();
reverse();
shift();
unshift();
slice();
some();
every();
splice();
toString();
toLocalString();
valuse();
Symbol();
//constructor的方法算原型方法吗
Array.isArray();
Array.from();
Array.of();

//改变原数组的
shift; //将第一个元素删除并且返回删除元素，空即为undefined
unshift; //向数组开头添加元素，并返回新的长度
pop; //删除最后一个并返回删除的元素
push; //向数组末尾添加元素，并返回新的长度
reverse; //颠倒数组顺序
sort; //对数组排序
splice(start, length, item); //删，增，替换数组元素，返回被删除数组，无删除则不返回

//不改变原数组的
forEach; //遍历，执行回调函数，没有返回值
concat; //连接多个数组，返回新的数组
slice; //slice(start,end)，返回选定元素
join; //将数组中所有元素以参数作为分隔符放入一个字符
map;
filter;
some;
every;

// 引用类型赋值会改变原数据，需复制
// 浅拷贝
slice(0);
concat();
Object.assign(arr1, arr2);
const a2 = [...a1];
//深拷贝
JSON.parse(JSON.stringify(arr));
// 缺点：
// 1.如果对象里有函数,函数无法被拷贝下来
// 2.无法拷贝copyObj对象原型链上的属性和方法
// 3.数据的层次很深，会栈溢出

//扁平化数组
// 1.0
var arr = [1, 3, 4, 5, [6, [0, 1, 5], 9], [2, 5, [1, 5]], [5]];
var result = [];
function unfold(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "object" && arr[i].length > 1) {
      unfold(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
}
unfold(arr);
//2.0
var c = [1, 3, 4, 5, [6, [0, 1, 5], 9], [2, 5, [1, 5]], [5]];
var b = c.toString().split(",");
//3.0
const flatten = (arr) =>
  arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);
var result = flatten(arr);

//遍历数组
// 1.0
// Array.prototype.forEach.call(arr,function(el){ });使用这个变种可以让类似的数组拥有foreach功能
// 使用break不能中断循环，使用return也不能返回到外层函数
arr.forEach((i) => {
  console.log(i);
});
//2.0-for in
// 可遍历数组
//会输出自身以及原型链上可枚举的属性
for (let i in arr) {
  console.log(i);
}
//3.0-for of
// 并发进行
// 不可遍历对象，Object.prototype上没有实现 [Symbol.iterator]() 方法
// 可迭代对象循环遍历集合，遍历属性的值
for (let i of arr) {
  console.log(i);
}
//4.0 map
// 不能使用break语句中断循环，return返回值
arr.map((i) => {
  console.log(i);
});

// slice
//从已有的数组中返回选定的元素。该方法并不会修改数组。返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。

//splice
//从数组中添加 / 删除项目，然后返回被删除的项目。该方法会改变原始数组。

//检测数组类型
typeof array;
array instanceof Array;
arr.constructor === Array;
Object.prototype.toString.call(o) === "[object Array]";
Array.isArray();

Math.max.apply(null, [7, 23, 434, 452, 98]);
Array.prototype.push.apply(arr1, arr2);

Array.prototype.filter = function (fn, context) {
  let result = [];
  context = context || this;
  for (var i = 0; i < this.length; i++) {
    if (fn.call(context, this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

//sort
var _sort = Array.prototype.sort;
Array.prototype.sort = function (fn) {
  if (!!fn && typeof fn === "function") {
    if (this.length < 2) return this;

    var i = 0,
      j = i + 1,
      l = this.length,
      tmp,
      r = false,
      t = 0;

    for (; i < l; i++) {
      for (j = i + 1; j < l; j++) {
        t = fn.call(this, this[i], this[j]);

        r = (typeof t === "number" ? t : !!t ? 1 : 0) > 0 ? true : false;

        if (r) {
          tmp = this[i];
          this[i] = this[j];
          this[j] = tmp;
        }
      }
    }
    return this;
  } else {
    return _sort.call(this);
  }
};
//从小到大，return1则交换位置
[1, 23, 4, 5, 10]
  .sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  })
  [
    // 或者
    (1, 23, 4, 5, 10)
  ].sort((a, b) => a - b);

// 差集
let difference = a.concat(b).filter((item) => !a.includes(item));
let difference = a.filter((item) => b.indexOf(item) === -1);
// 交集
let intersection = a.filter(item => b.includes(item))
// 并集
let union = a.concat(b.filter(item=>!a.includes(item)))