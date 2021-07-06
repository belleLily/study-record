/**
 * 判断手机是Andoird还是IOS
 *  0: ios
 *  1: android
 *  2: 其它
 */
export function getOSType() {
  let u = navigator.userAgent;
  let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1;
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  if (isIOS) {
    return 0;
  }
  if (isAndroid) {
    return 1;
  }
  return 2;
}
