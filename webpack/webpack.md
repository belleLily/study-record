# Webapck

## 提高打包速度

1. 打包线上环境全量构建，代码压缩、目录内容清理、计算文件 hash、(`ExtractTextWebpackPlugin`)提取 CSS 文件。
   开发环境使用监听模式进行增量构建，热更新热替换。

```javascript
plugins: [new webpack.HotModuleReplacementPlugin()];
```

2. 使用`ParallelUglifyPlugin`代替自带的`UglifyJsPlugin`
3. 使用`fast-sass-loader`代替`sass-loader`
4. `babel-loader`开启缓存
5. 不需要打包编译的插件库换成全局`<script>`标签引入的方式, `expose-loader`,`externals`,`ProvidePlugin`
6. 使用`CommonsChunkPlugin`提取公共代码
7. 配置路径使搜索更快，利用别名`alias`。使用`exclude`避免多余查找文件。
8. 异步模块加载，模块化部分引入。

## 拆分配置（dev，prod）和 merge

`webpack-merge`

## 启动服务，webpack-dev-server

## 处理 ES6

js 通过`babel-loader`，配置`.babelrc`

## 处理 CSS

通过 `postcss-loader`(加前缀等浏览器兼容性`autoprefixer`)，`css-loader`（import '../index.css'），`style-loader`(插入到页面中),`less-loader`,`sass-loader`

## 处理图片

dev 环境使用`file-loader`把图片打包出本地图片，prod 环境使用`url-loader`打包成`limit`base64(以 html 格式访问，减少 http 请求)图片到`outputPath`或者`publicPath`(静态文件 url 的前缀)

```javascript
let config = {
  output: {
    filename: "bundle.[contentHash:8].js",
  },
};
```

## 模块化

## 多入口

```javascript
let config = {
  entry: {
    index: path.join(srcPath, "index.js"),
    other: path.join(srcPath, "other.js"),
  },
  output: {
    filename: "[name].[contentHash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: vueLoaderConfig,
      },
    ],
  },
  devServer: {
    hot: true,
  },
  plugs: [
    new CleanWebpackPlugin(), // 会默认清空output.path文件夹
    new webpack.HotModuleReplacementPlugin(), // 热更新
    new HtmlWebpackPlugin({
      template: path.join(srcPath, "index.html"),
      filename: "index.html",
      // chunks 表示该页面要引用哪些 chunk （即上面的 index 和 other），默认全部引用,
      chunks: ["index", "vendor", "common"], // index.js，要考虑代码分割
    }),
    new HtmlWebpackPlugin({
      template: path.join(srcPath, "other.html"),
      filename: "other.html",
      chunks: ["other", "vendor", "common"],
    }),
    new MiniCssExtractPlugin({
      filename: "css/main.[contentHash:8].css",
    }),
  ],
  optimization: {
    // 压缩 css
    minimizer: [
      new TerserWebpackPlugin({}),
      new OptimizeCSSAssetsWebpackPlugin({}),
    ],
    // 分割代码块
    splitChunks: {
      chunks: "all", //initial 入口 chunk，async 异步 chunk，all 全部 chunk
      // 缓存分组
      cacheGroups: {
        // 第三方模块
        vendor: {
          name: "vendor", // chunk 名称
          priority: 1, // 权限更高，优先抽离，重要！！！
          test: /node_modules/,
          minSize: 0, // 大小限制
          minChunks: 1, // 最少复用过几次
        },
        // 公共的模块
        common: {
          name: "common", // chunk 名称
          priority: 0, // 优先级
          minSize: 0, // 公共模块的大小限制
          minChunks: 2, // 公共模块最少复用过几次
        },
      },
    },
  },
};
```

## CSS 抽离

安装`mini-css-extract-plugin`，使用其 loader

## 抽离公共代码

通过代码分割

## 异步加载

通过 import 异步加载的包会单独打包为一个 js，引用时加载

## 解析 react

.babelrc 里配置

```javascript
{
    "presets": ["@babel/preset-react"],
    "plugins": []
}
```

## module，chunk，bundle

- module 各个源码文件
- chunk 多模块合成的，entry，import，splitChunks
- bundle 最终多输出文件

## dev 环境优化打包速度
 
1. 优化 babel-loader

```javascript
{
    test: /\.js$/,
    use: ['babel-loader?cacheDirectory'], //开启缓存
    include: path.resolve(__dirname, 'src'),
    //exclude: path.resolve(__dirname, 'node_modules')
}
```
2. IgnorePlugin
  在插件中使用webpack.IgnorePlugin匹配到moment下的locale语言包，进行忽略处理，即不引入所有的locale下的语言包。在需要使用到具体的语言时，在代码中引入具体的语言包，避免引入无用模块[IgnorePlugin Compare noParse](https://blog.csdn.net/qq_39207948/article/details/113839069)
3. noParse
  一般使用.min.js结尾的文件，都是已经经过模块化处理的，那么这个时候就没必要在进行loder或者webpack分析了，noParer的字面意思也是不再解析。该引入还是会引入，只是不参与 loader 或 webpack 的解析及打包。比如`react.min.js`
4. happyPack
   js 单线程，开启多进程打包
5. ParalleUglifyPlug
   多进程压缩 js
6. 自动刷新
7. 热更新
   新代码生效，网页不生效，状态不丢失
8. DllPlugin
   动态链接库
   >webpack内置DllPlugin
   >DllPlugin打包出dll文件
   >DllReferencePlugin使用dll文件

## prod 环境优化速度

1. 小图片 base64 编码
2. bundle 加 hash，打包文件缓存
3. 懒加载
4. 提取公共代码 chunks
5. IgnorePlugin
6. 使用 CDN 加速
   publicPath
7. 使用production模式
  自动压缩代码，vue/react等会自动删除调试代码
  Tree-Shaking，没使用上的代码不被打包，只有在(ES-Module)module静态引入，编译时生效实现Tree-shaking，commonjs动态引入执行时生效无法实现Tree-Shaking
  Scope Hosting，相互依赖的函数合并成一个，减少作用域的创建，ModuleConcatenationPlugin

## babel
@babel/preset-env：所有plugins的集合
@babel/babel-polyfill：corejs + regenerator，会污染全局环境
@babel-runtime：重新命名变量，不会污染全局环境

## 打包构建
1. 体积更小（Tree-Shaking、压缩、合并）,加载更快
2. 编译高级语言或语法（TS、ES6+、模块化、SCSS）
3. 兼容性和错误检查（Polyfill、postcss、eslint) 

## loader
模块转换器

## plugin
扩展插件

### 前端代码为什么要进行构建和打包
1、减少http请求次数，体积更小，加载更快（tree-shaking，压缩合并）
2、将高级语法编译成浏览器识别的es5语法，编译高级语言和语法（ts，es6，模块化）
3、兼容性和错误提示（polyfill，postcss，eslint）
4、 统一、高效的开发环境，统一的构建流程和产出标准，集成公司构建规范（提测，上线）

### module，chunk，bundle是什么以及区别
module，模块可供引入使用的文件
chunk，多个模块合并之后的或者代码分割splitChunk形成的代码块
bundle，许多不同的模块生成，包含已经经过加载和编译过程的源文件的最终版本。打包构建输出的文件

### loader和plugin的区别
loader：webpack只能打包commonjs规范的js文件，针对其他文件类型，需要使用loader来进行打包，专注于转化文件，完成打包过程。
plugin：打包优化到压缩，重新定义环境变量。处理各种类型的任务。

### webpack如何实现懒加载
动态导入。资源需要时再import

### webpack常见性能优化
1. 优化babel-loader
2. happyPack多进程打包
    js单线程，开启多进程打包，提高构建速度（多核CPU)
3. ParallelUglifyPlugin多进程压缩JS
### babel-runtime和babel-polyfill区别
babel,synx(ES6->ES5)转换，箭头函数转function
babel-polyfill，针对不同浏览器做了api兼容，比如新增Object.assign方法
babel-runtime，将依赖的api本地隔离，例如用户安装的Promise和本地依赖的_Promise
[知乎](https://zhuanlan.zhihu.com/p/58624930)

### 如何进行线上调试
1、本地起线上版本代码debugger调试
2、sourcemap本地映射