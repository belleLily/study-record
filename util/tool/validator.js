

export const isType = (o) => {
    return /\[object\s(.*?)\]/.exec(Object.prototype.toString.call(o))[1];
};

/**
 *  验证email(邮箱)
 * @param { string } value
 */
export const isEmail = (value) =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g.test(
    value
  );

/**
 *  验证身份证号(1代,15位数字) || 验证身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X
 * @param { string } value
 */
export const isIDCard = (value) =>
  /^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$/g.test(value) ||
  /^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}[\dXx]$/g.test(value);
// export const isIDCard = value => /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)

export const isPhone = (value) => /^1[345678]\d{9}$/.test(value);

// 是否是日期
export const isDate = function(date) {
    if (date === null || date === undefined) return false
    if (isNaN(new Date(date).getTime())) return false
    if (Array.isArray(date)) return false // deal with `new Date([ new Date() ]) -> new Date()`
    return true
  }