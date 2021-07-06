[阮一峰教程](http://www.ruanyifeng.com/blog/2019/09/curl-reference.html)
作用： 请求 Web 服务器

## -d
-d参数用于发送 POST 请求的数据体
```
curl -d'login=emma＆password=123'-X POST https://google.com/login
```

## -x
-x参数指定 HTTP 请求的代理。

## -X
-X参数指定 HTTP 请求的方法。
