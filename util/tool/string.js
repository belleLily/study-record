/**
 *  金钱格式化，三位加逗号
 *  @param { number } num
 */
export const formatMoney = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const formatNumber = (n) => {
  n = n.toString();
  return n[1] ? n : "0" + n;
};

//加密手机号
export const encrypPhone = (phone) => {
    return phone ? phone.replace(/^(\d{3})\d*(\d{4}$)/, "$1****$2") : "";
  };
/**
 * 去除空格
 * @param { string } str 待处理字符串
 * @param  { number } type 去除空格类型 1-所有空格  2-前后空格  3-前空格 4-后空格 默认为1
 */
export function trim(str, type = 1) {
  if (type && type !== 1 && type !== 2 && type !== 3 && type !== 4) return;
  switch (type) {
    case 1:
      return str.replace(/\s/g, "");
    case 2:
      return str.replace(/(^\s)|(\s*$)/g, "");
    case 3:
      return str.replace(/(^\s)/g, "");
    case 4:
      return str.replace(/(\s$)/g, "");
    default:
      return str;
  }
}

/**
 * 大小写转换
 * @param { string } str 待转换的字符串
 * @param { number } type 1-全大写 2-全小写 3-首字母大写 其他-不转换
 */

export function turnCase(str, type) {
  switch (type) {
    case 1:
      return str.toUpperCase();
    case 2:
      return str.toLowerCase();
    case 3:
      return str[0].toUpperCase() + str.substr(1).toLowerCase();
    default:
      return str;
  }
}

//首字母大写
export const capitalize = (value) => {
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
};
