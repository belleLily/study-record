// 对函数f: (n:number) => number 进行记忆处理 const g = memo(f), 得到新函数g.
// 连续调用g(1) g(1)...多次，只有第一次调用会真正执行f
function  memo(fn) {
    let called = false
    return function () {
        if (!called) {
            called = true
            fn.apply(this,arguments)
        }
    }
}
function a(n) {
    console.log('come true')
    return n
}
let g = memo(a)
g()
g()
g()