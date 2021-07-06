// 错误类型
Error //Error 是基类型，其他错误类型都继承自该类型
EvalError //使用 eval()函数而发生异常时被抛出
RangeError
ReferenceError
SyntaxError
TypeError
URIError

try {
    
} catch (e) {
    
} finally {
    
}

throw "Error Happen"
throw new Error("Error Happen");
throw new SyntaxError("Syntax Error Happen");

// if 之类的语句在确定下一步操作之前，会自动把任何值转换成布尔值。

// 错误日志收集
// try catch
// window.onerror = (msg, url, row, col, error) => {}
// widow.addEventListener('error',(e)=>{})
// vue.config.errorHandler
// react->componentDidCatch