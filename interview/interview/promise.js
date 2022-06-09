// https://juejin.cn/post/6844903605250572302
const first = () =>
  new Promise((resolve, reject) => {
    console.log(3);
    let p = new Promise((resolve, reject) => {
      console.log(7);
      setTimeout(() => {
        console.log(5);
        resolve(6);
      }, 0);
      resolve(1);
    });
    resolve(2);
    p.then((arg) => {
      console.log(arg);
    });
  });

first().then((arg) => {
  console.log(arg);
});
console.log(4);


// 正解: 3,7,4,1,2,5
// 错误解析: 第一轮事件循环，执行完宏任务，再执行p的微任务p1，first微任务f1（依次执行）