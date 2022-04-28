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

### babel-runtime和babel-polyfill区别