const ua = navigator.userAgent.toLowerCase();
const UA = {};
UA.ie = /(msie\s|trident.*rv:)([\d.]+)/.test(ua);
UA.firefox = /firefox\/([\d.]+)/.test(ua);
UA.chrome = /chrome\/([\d.]+)/.test(ua);
UA.opera = /opera.([\d.]+)/.test(ua);
UA.safari = /version\/([\d.]+).*safari/.test(ua);
UA.android = /android/.test(ua);
UA.iphone = /phone os/.test(ua);
UA.ipad = /pad/.test(ua);
UA.ios = UA.ipad || UA.iphone;
if (UA.ios) {
    UA.ios8 = /os 8/.test(ua);
}
UA.isTablet = /(?:ipad|playbook)/.test(ua) || (UA.android && !/(?:mobile)/.test(ua)) || (UA.firefox && /(?:tablet)/.test(ua)); // 平板
UA.isWin32 = /win32/.test(window.navigator.platform);
UA.isWeixin = /micromessenger/.test(ua);
UA.isUcweb = /ucbrowser/.test(ua);
UA.isMqq = navigator.userAgent.indexOf('QQ') !== -1;
UA.isWeiBo = /__weibo__/.test(ua);

UA.winClient = /winclient/i.test(ua);
UA.androidClient = /acandroidclient/i.test(ua);
UA.ipadClient = /acipadclient/i.test(ua);
UA.iphoneClient = /aciphoneclient/i.test(ua);
UA.iosClient = UA.ipadClient || UA.iphoneClient; // 是否ios客户端

export default UA;
