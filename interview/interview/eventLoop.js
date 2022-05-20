// https://blog.csdn.net/u010369794/article/details/106223857
console.log("1");

setTimeout(function () {
  console.log("2");
  process.nextTick(function () {
    console.log("3");
  });
  new Promise(function (resolve) {
    console.log("4");
    resolve();
  }).then(function () {
    console.log("5");
  });
});

process.nextTick(function () {
  console.log("6");
});

new Promise(function (resolve) {
  console.log("7");
  resolve();
  console.log("14")
  process.nextTick(function () {
    console.log("15");
  });
  new Promise(function (reolve) {
    console.log("16")
    reolve();
  }).then(() => {
    console.log("17")
  })
}).then(function () {
  console.log("8");
});

setTimeout(function () {
  console.log("9");
  process.nextTick(function () {
    console.log("10");
  });
  new Promise(function (resolve) {
    console.log("11");
    resolve();
  }).then(function () {
    console.log("12");
  });
});

console.log("13")

// 1,7,14,16,13,6,15,17,8,2,4,3,5,9,11,10,12

// 主线程，调用栈（后进先出）执行完毕
// 主线程下的微任务
// 任务队列里的宏任务【定时器】->宏任务的主线程-> 宏任务下的微任务


// 微任务：promise，process.nextTick，MutationObserver
// 宏任务：dom事件（addEventListener)，异步请求（ajax），定时器，I/O、UI交互事件、setImmediate（node环境）