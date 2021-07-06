Generator;// 返回值是 Iterator 对象
// 交出函数的执行权（即暂停执行），返回一个遍历器对象
// 使用 yield 操作符返回值的函数，调用它时就会创建并返回一个新的 Generator 实例。
// yield表达式是暂停执行的标记，而next方法可以恢复执行。
yield;
Generator.close();
// next方法的参数表示上一个yield表达式的返回值
Generator.next();
// for of实现斐波那契数列
function* fibonacci() {
  let [pre, cur] = [0, 1];
  for (;;) {
    yield (cur[(pre, cur)] = [cur, pre + cur]);
  }
}
// 一旦next方法的返回对象的done属性为true，for...of循环就会中止，且不包含该返回对象
for (let n of fibonacci()) {
  if (n > 1000) break;
  console.log(n);
}

function* generator() {
  console.log("start");
  var res = yield loop();
  console.log("end");
}
function loop() {
  return new Promise(function (resolve, reject) {
    try {
      console.time("loop");
      for (var i = 0; i < 1000000000; i++) {}
      console.timeEnd("loop");
    } catch (e) {
      reject(e);
    }
    resolve();
  });
}
//自动执行器
function run(generator) {
    var g = generator();
    function next(data) {
        var result = g.next(data);
        if (result.done) return result.value;
        result.value.then(function (data) {
            next(data);
        });
    }
    next();
}
run(generator);

