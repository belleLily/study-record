// this指向问题
// 1.promise的then回调函数是匿名函数，pending状态this指向window，resolve状态指向undefined
// 2.promise的then回调函数是箭头函数，this指向最外层第一个普通函数的this

var executeAsync
if (typeof process=='object' && process.nextTick) {
  executeAsync = process.nextTick
} else if (typeof setImmediate=='function') {
  executeAsync = setImmediate
} else {
  executeAsync = function (fn) {setTimeout(fn, 0)}
}
function callAsync(fn, arg, callback, onError) {
  executeAsync(function () {
    try {
      callback ? callback(fn(arg)) : fn(arg)
    } catch (e) {
      onError(e)
    }
  })
}

// 判断变量否为function
const isFunction = variable => typeof variable === 'function'
// 定义Promise的三种状态常量
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor(handle) {
    if (!isFunction(handle)) {
      throw new Error('MyPromise must accept a function as a parameter')
    }
    // 添加状态
    this._status = PENDING
    // 添加状态
    this._value = null
    // 添加成功回调函数队列
    this._fulfilledQueue = []
    // 添加失败回调函数队列
    this._rejectedQueue = []
    // 执行handle
    try {
      handle(this._resolve.bind(this), this._reject.bind(this)) 
    } catch (err) {
      this._reject(err)
    }
  }
  // 添加resovle时执行的函数
  _resolve(val) {
    if (this._status !== PENDING) return
    this._status = FULFILLED
    // 依次执行成功队列中的函数，并清空队列
    const runFulfilled = (value) => {
      let cb;
      while (cb = this._fulfilledQueue.shift()) {
        cb(value)
      }
    }
    // 依次执行失败队列中的函数，并清空队列
    const runRejected = (error) => {
      let cb
      while (cb = this._rejectedQueue.shift()) {
        cb(error)
      }
    }
    /* 如果resolve的参数为Promise对象，则必须等待该Promise对象状态改变后,
      当前Promsie的状态才会改变，且状态取决于参数Promsie对象的状态
    */
    if (val instanceof MyPromise) {
      val.then(value => {
        this._value = value
        runFulfilled(value)
      }, err => {
        this._value = err
        runRejected(err)
      })
    } else {
      this._value = val
      runFulfilled(val)
    }
  }
  // 添加reject时执行的函数
  _reject(err) { 
    if (this._status !== PENDING) return
    // 依次执行失败队列中的函数，并清空队列
    this._status = REJECTED
    this._value = err
    let cb
    while (cb = this._rejectedQueue.shift()) {
      cb(err)
    }
  }
  // 添加then方法
  then(onFulfilled, onRejected) {
    // 返回一个新的Promise对象
    return new MyPromise((onFulfilledNext, onRejectedNext) => {
      // 封装一个成功时执行的函数
      let fulfilled = value => {
        if (isFunction(onFulfilled)) {
          callAsync(onFulfilled, value, res => {
            if (res instanceof MyPromise) {
              // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
              res.then(onFulfilledNext, onRejectedNext)
            } else {
              // 否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
              onFulfilledNext(res)
            }
          }, onRejectedNext)
        } else {
          try {
            onFulfilledNext(value)
          } catch (err) {
            // 如果函数执行出错，新的Promise对象的状态为失败
            onRejectedNext(err)
          }
        }
      }
      // 封装一个失败时执行的函数
      let rejected = error => {
        if (isFunction(onRejected)) {
          callAsync(onRejected, error, res => {
            if (res instanceof MyPromise) {
              // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
              res.then(onFulfilledNext, onRejectedNext)
            } else {
              // 否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
              onFulfilledNext(res)
            }
          }, onRejectedNext)
        } else {
          try {
            onRejectedNext(error)
          } catch (err) {
            // 如果函数执行出错，新的Promise对象的状态为失败
            onRejectedNext(err)
          }
        }
      }

      switch (this._status) {
        // 当状态为pending时，将then方法回调函数加入执行队列等待执行
        case PENDING:
          this._fulfilledQueue.push(fulfilled)
          this._rejectedQueue.push(rejected)
          break
        // 当状态已经改变时，立即执行对应的回调函数
        case FULFILLED:
          fulfilled(this._value)
          break
        case REJECTED:
          rejected(this._value)
          break
      }
    })
  }
  // 添加catch方法
  catch(onRejected) {
    return this.then(null, onRejected)
  }
  // 添加静态resolve方法
  static resolve(value) {
    // 如果参数是MyPromise实例或thenable对象，直接返回value
    return value instanceof MyPromise ||
      (value && isFunction(value.then)) ? value :
      new MyPromise(resolve => resolve(value))
  }
  // 添加静态reject方法
  static reject(value) {
    return new MyPromise((resolve, reject) => reject(value))
  }
  // 添加静态all方法
  static all(list) {
    return new MyPromise((resolve, reject) => {
      let values = [], count = list.length
      for (let i in list) {
        // 数组参数如果不是MyPromise实例，先调用MyPromise.resolve
        this.resolve(list[i]).then(res => {
          values[i] = res
          // 所有状态都变成fulfilled时返回的MyPromise状态就变成fulfilled
          --count<1 && resolve(values)
        }, reject)
      }
    })
  }
  // 添加静态race方法
  static race(list) {
    return new MyPromise((resolve, reject) => {
      for (let p of list) {
        // 只要有一个实例率先改变状态，新的MyPromise的状态就跟着改变
        this.resolve(p).then(res => {
          resolve(res)
        }, reject)
      }
    })
  }
  finally(cb) {
    return this.then(
      value  => MyPromise.resolve(cb()).then(() => value),
      reason => MyPromise.resolve(cb()).then(() => { throw reason })
    )
  }
}

// 测试代码
new MyPromise(resolve => {
  console.log(1);
  resolve(3);
  MyPromise.resolve().then(() => console.log(4)).then(() => console.log(5))
}).then(num => { console.log(num) }).then(() => { console.log(6) });
console.log(2)
// 依次输出：1 2 4 3 5 6

class PromiseClass {
    constructor(handle) {
        if (typeof handle !== "function") {
            throw new Error("PromiseClass must accept a function as a parameter");
        }
        this._status = "PENDING";
        this._value = undefined;
        this._fulfilledQueues = [];
        this._rejectedQueues = [];
        try {
            handle(this._resolve.bind(this), this._reject.bind(this));
        } catch (e) {
            this._reject(e);
        }
    }
    _resolve(val) {
        if (this._status !== "PENDING") return;
        const run = () => {
            this._status = "FULFILLED";
            const runFulfilled = (value) => {
                let cb;
                while ((cb = this._fulfilledQueues.shift())) {
                    cb(value);
                }
            };
            const runRejected = (error) => {
                let cb;
                while ((cb = this._rejectedQueues.shift)) {
                    cb(error);
                }
            };
            if (val instanceof PromiseClass) {
                val.then(
                    (value) => {
                        this._value = value;
                        runFulfilled(value);
                    },
                    (err) => {
                        this._value = err;
                        runRejected(err);
                    }
                );
            } else {
                this._value = val;
                runFulfilled(val);
            }
        };
        setTimeout(run, 0);
    }
    _reject(err) {
        if (this._status !== "PENDING") return;
        const run = () => {
            this._status = "REJECTED";
            let cb;
            while ((cb = this._rejectedQueues.shift())) {
                cb(err);
            }
        };
        setTimeout(run, 0);
    }
    then(onFulfilled, onRejected) {
        const { _value, _status } = this;
        return new PromiseClass((onFulfilledNext, onRejectedNext) => {
            let fulfilled = (value) => {
                try {
                    if (typeof onFulfilled !== "function") {
                        onFulfilledNext(value);
                    } else {
                        let res = onFulfilled(value);
                        if (res instanceof PromiseClass) {
                            res.then(onFulfilledNext, onRejectedNext);
                        } else {
                            onFulfilledNext(res);
                        }
                    }
                } catch (e) {
                    onRejectedNext(e);
                }
            };
            let rejected = (error) => {
                try {
                    if (typeof onRejected !== "function") {
                        onRejectedNext(error);
                    } else {
                        let res = onRejected(error);
                        if (res instanceof PromiseClass) {
                            res.then(onFulfilledNext, onRejectedNext);
                        } else {
                            onRejectedNext(res);
                        }
                    }
                } catch (e) {
                    onRejectedNext(e);
                }
            };
            switch (_status) {
                case "PENDING":
                    this._fulfilledQueues.push(fulfilled);
                    this._fulfilledQueues.push(rejected);
                    break;
                case "FULFILLED":
                    fulfilled(_value);
                    break;
                case "REJECTED":
                    rejected(_value);
                    break;
            }
        });
    }
    catch(onRejected) {
        return this.then(undefined, onRejected);
    }
    finally(cb) {
        return this.then(
            value => PromiseClass.resolve(cb()).then(() => value),
            reason => PromiseClass.resolve(cb()).then(() => { throw reason })
        )
    }
    static resolve(value) {
        if (value instanceof PromiseClass) return value;
        return new PromiseClass((resolve) => resolve(value));
    }
    static reject(value) {
        return new PromiseClass((resolve, reject) => reject(value));
    }
    static all(list) {
        return new PromiseClass((resolve, reject) => {
            this.values = [];
            this.count = 0;
            for (let [i, p] of list) {
                this.resolve(p).then((res) => {
                    value[i] = res;
                    count++;
                    if (count === this.list.length) resolve(values);
                }, error => {
                    reject(error)
                });
            }
        });
    }
    static race(list) {
        return new PromiseClass((resolve, reject) => {
            for (let p of list) {
                this.resolve(p).then(res => {
                    resolve(res)
                }, err => {
                    reject(err)
                })
            }
        })
    }
}