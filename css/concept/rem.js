//rem布局的本质是等比缩放，一般是基于宽度

(function (doc, win) {
  var docEl = doc.documentElement;
  var resizeEvt =
    "orientationchange" in window ? "orientationchange" : "resize";
  var recalc = function () {
    var clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    if (clientWidth >= 667) {
      docEl.style.fontSize = 192 * (clientWidth / 1920) + "px";
    } else {
      docEl.style.fontSize = 10 * (clientWidth / 750) + "px";
    }
  };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);



//750设计稿
// 100vw = 750px
// 1px = 100vw/750
// 100px= 10000vw/750=100vw/7.5
// html:font-size->1rem=100px->100vw/7.5
// html {
//     font-size: calc(10000vw / 750); //1rem等于100px
// }