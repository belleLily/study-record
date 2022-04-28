/**
 * @desc 函数防抖
 * @param { function } func
 * @param { number } wait 延迟执行毫秒数
 */
export function debounce(func, wait = 500) {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

/**
 * @desc 函数节流
 * @param { function } fn 函数
 * @param { number } delay 延迟执行毫秒数
 */
export function throttle(fn, delay) {
  let timer;
  let prevTime;
  return function (...args) {
    const currTime = Date.now();
    const context = this;
    if (!prevTime) prevTime = currTime;
    clearTimeout(timer);

    if (currTime - prevTime > delay) {
      prevTime = currTime;
      fn.apply(context, args);
      clearTimeout(timer);
      return;
    }

    timer = setTimeout(function () {
      prevTime = Date.now();
      timer = null;
      fn.apply(context, args);
    }, delay);
  };
}

/**
 * @description: 判断类型
 * @param {*}
 * @return {*}
 */
export const type = (obj) => {
  let typeStr = Object.prototype.toString.call(obj).split(" ")[1];
  return typeStr.substr(0, typeStr.length - 1).toLowerCase();
};

//深拷贝
export const deepClone = (obj) => {
  if (obj === null) return null;
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);
  if (typeof obj !== "object") {
    return obj;
  }
  let t = new obj.constructor();
  for (let key in obj) {
    t[key] = deepClone(obj[key]);
  }
  return t;
};
// 1.无法保持引用
// 2.当数据的层次很深，会栈溢出
export const deepClone1 = (target) => {
  if (!!target && typeof target === "object") {
    var result = Array.isArray(target) ? [] : {};
    for (var key in target) {
      if (target.hasOwnProperty(key)) {
        result[key] =
          typeof target[key] === "object"
            ? deepClone(target[key])
            : target[key];
      }
    }
    return result;
  } else {
    return target;
  }
};
export const deepClone2 = (x) => {
  const root = {};
  // 栈
  const loopList = [
    {
      parent: root,
      key: undefined,
      data: x,
    },
  ];
  while (loopList.length) {
    // 深度优先
    const node = loopList.pop();
    const parent = node.parent;
    const key = node.key;
    const data = node.data;
    // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
    let res = parent;
    if (typeof key !== "undefined") {
      res = parent[key] = {};
    }
    for (let k in data) {
      if (data.hasOwnProperty(k)) {
        if (typeof data[k] === "object") {
          // 下一次循环
          loopList.push({
            parent: res,
            key: k,
            data: data[k],
          });
        } else {
          res[k] = data[k];
        }
      }
    }
  }
  return root;
};
export const deepCloneObj = (source) => {
  var copy = Object.create(Object.getPrototypeOf(source));
  Object.getOwnPropertyNames(copy).forEach(function (propKey) {
    var desc = Object.getOwnPropertyDescriptor(source, propKey);
    Object.defineProperty(copy, propKey, desc);
  });
  return target;
};

// 获取一个元素的任意 CSS 属性值
export const getStyle = (element, attr) => {
  if (element.currentStyle) {
    return element.currentStyle[attr];
  } else {
    return getComputedStyle(element, false)[attr]; //window.getComputedStyle(element,null).getPropertyValue(attr)
  }
};

export const toRGB = (color, opacity) => {
  color = color.replace(/#/g, "");
  let num = parseInt(color, 16);
  return `rgba(${num >> 16},${(num >> 8) & 255},${num & 255},${opacity})`;
};

//  F9C90C->rgba(249, 201, 12, 1)

export const toHex = (red, green, blue) => {
  return (blue | (green << 8) | (red << 16) | (1 << 24)).toString(16).slice(1);
};

export const toUpperChinese = (str) => {
  var arr = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
  str = str.replace(/\d/g, function () {
    return arr[arguments[0]];
  });
  return str;
};

/**
 * @description: 用*替代指定位置的字符串，中间部分不包括-
 * @param {string} chart 指定字符串
 * @param {*} begin 起始位置，默认为3
 * @param {*} end   结束位置，默认为4
 * @return {*} *替代后的字符串
 */
export const encrypChart = (chart, begin = 3, end = 4) => {
  const reg = new RegExp("(?<=.{" + begin + "})[^-](?=.{" + end + "})", "g");
  return chart ? chart.replace(reg, "*") : null;
};

export const encrypName = (name) => {
  if (name) {
    return name.length > 2
      ? name.replace(/(?<=.).(?=.)/g, "*")
      : name.replace(/.(?=.)/g, "*");
  }
  return null;
};

export const clamp = (value, min, max) => {
  if (value === null) {
    return min;
  }
  return Math.min(Math.max(value, min), max);
};
