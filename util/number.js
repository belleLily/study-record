/**
 * 生成指定范围随机数
 * @param { number } min
 * @param { number } max
 */
export const RandomNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

//保留*位小数
export const fixedPrice = (price, num) => {
  return !isNaN(price) ? parseFloat((price / 100).toFixed(num)) : 0;
};
//数字转索引数组
export const range = function (n) {
  return Array.apply(null, { length: n }).map((_, n) => n);
};
//数字类型转化为千分位逗号分隔的样式
export const parseKNum = function (num) {
  let int = String(num).split(".")[0];
  let float = String(num).split(".")[1];
  //如果有浮点数 则需要在字符串后面添加
  if (float) {
    return `${int.replace(/\d(?=(?:\d{3})+(?:\.\d+|$))/g, "$&,")}.${float}`;
  }
  return int.replace(/\d(?=(?:\d{3})+(?:\.\d+|$))/g, "$&,");
};
