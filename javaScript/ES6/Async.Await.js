

async await(Generator 函数和自动执行器，包装在一个函数里) //返回值是 Promise 对象
// async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await
async function fn(args) {
    // ...
}
function fn(args) {
    return spawn(function* () {
      // ...
    });
}
//自动执行器
function spawn(genF) {
    return new Promise(function(resolve, reject) {
        const gen = genF();
        function step(nextF) {
        let next;
        try {
            next = nextF();
        } catch(e) {
            return reject(e);
        }
        if(next.done) {
            return resolve(next.value);
        }
        Promise.resolve(next.value).then(function(v) {
            step(function() { return gen.next(v); });
        }, function(e) {
            step(function() { return gen.throw(e); });
        });
        }
        step(function() { return gen.next(undefined); });
    });
}