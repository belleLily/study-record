// 移动端的click事件会延迟300ms触发事件回调(只在部分手机浏览器上出现)。

// 为什么会这样？
// 因为手机浏览器中需要处理如翻页这样复杂的手势。
// 在用户做翻页或双击放大等操作时，是先将手指触碰到屏幕（此时理应已经触发了click事件），然后再上下移动手指，
// 浏览器开发厂商为了识别这种事件，所以加入了300ms延迟的处理。

// 禁用缩放
// <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
// 兼容safari
window.onload = function () {
    // 阻止双击放大
    var lastTouchEnd = 0;
    document.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    });
    document.addEventListener('touchend', function (event) {
        var now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    // 阻止双指放大
    document.addEventListener('gesturestart', function (event) {
        event.preventDefault();
    });
}

FastClick.js
// 检测到touchend事件的时候，会通过 DOM 自定义事件立即触发一个模拟click事件，并把浏览器在 300 毫秒之后真正触发的click事件阻止掉。