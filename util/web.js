//获取浏览器地址参数
export const getUrlPara = (name) => {
  //获取code
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
};

// qs
export const parseQueryString = (param) => {
  if (param === null) return "";
  let pairs = [];
    let str = "";
  for (let prop in param) {
    if (param.hasOwnProperty(prop)) {
      let k = encodeURIComponent(prop);
        let v = encodeURIComponent(param[prop]);
      pairs.push(k + "=" + v);
    }
  }
  str = "?" + pairs.join("&");
  return str;
};

export function parseQueryObj(str) {
  var reg = /([^?=&]+)=([^?=&]+)/g;
  var obj = {};
  str.replace(reg, function ($0, $1, $2) {
    obj[$1] = $2;
  });
  return obj;
}
/**
 * 获取窗口可视范围的高度
 */
export function getClientHeight() {
  let clientHeight = 0;
  if (document.body.clientHeight && document.documentElement.clientHeight) {
    clientHeight =
      document.body.clientHeight < document.documentElement.clientHeight
        ? document.body.clientHeight
        : document.documentElement.clientHeight;
  } else {
    clientHeight =
      document.body.clientHeight > document.documentElement.clientHeight
        ? document.body.clientHeight
        : document.documentElement.clientHeight;
  }
  return clientHeight;
}
/**
 * 滚动到指定元素区域
 */
export const smoothScroll = (element) => {
  document.querySelector(element).scrollIntoView({
    behavior: "smooth",
  });
};
//滚动到指定位置
export const scrollTo = (position) => {
  let scrollDuration = 500;
  let scrollStep = (position - window.scrollY) / (scrollDuration / 15);
  let scrollInterval = setInterval(() => {
    if (Math.abs(window.scrollY - position) > Math.abs(scrollStep)) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
      document.body.scrollTop = position;
      document.documentElement.scrollTop = position;
    }
  }, 15);
};
/**
 * 平滑滚动到页面顶部
 */
export const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

//获取cookie方法
export const getCookie = (key) => {
  var getCookie = document.cookie.replace(/[ ]/g, "");
  var arrCookie = getCookie.split(";"); //将获得的cookie以"分号"为标识 将cookie保存到arrCookie的数组中
  for (var i = 0; i < arrCookie.length; i++) {
    var arr = arrCookie[i].split("="); //将单条cookie用"等号"为标识，将单条cookie保存为arr数组
    if (key == arr[0]) {
      //匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
      return arr[1]; //将cookie的值赋给变量tips
    }
  }
}
//删除cookie方法
export const deleteCookie = (key) => {
  var date = new Date(); //获取当前时间
  date.setTime(date.getTime() - 10000); //将date设置为过去的时间
  document.cookie = key + "=v; expires =" + date.toGMTString(); //设置cookie
  return tips;
}

