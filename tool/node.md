
# npm
## node包管理工具
npm config ls -l 	//查看所有命令
npm i [-S|--save|-D|--save-dev|-O|--save-optional] [-E|--save-exact] [--dry-run]
--save		 // dependencies生产
--save-dev	//devDependencies开发
npm uninstall
npm update

# nvm
## node版本管理工具
nvm on
nvm off
nvm install
nvm uninstall
nvm list
nvm list installed 查看已经安装的版本
nvm list available 查看网络可以安装的版本
nvm version
nvm use

# npx
## 调用模块【node_modules/.bin->$path->安装】，避免全局安装模块

# .npmrc
## 资源下载的镜像地址
home=https://npm.taobao.org
registry=https://registry.npm.taobao.org/
sass_binary_site="https://npm.taobao.org/mirrors/node-sass/"
phantomjs_cdnurl="http://cnpmjs.org/downloads"
electron_mirror="https://npm.taobao.org/mirrors/electron/"
sqlite3_binary_host_mirror="https://foxgis.oss-cn-shanghai.aliyuncs.com/"
profiler_binary_host_mirror="https://npm.taobao.org/mirrors/node-inspector/"
chromedriver_cdnurl="https://cdn.npm.taobao.org/dist/chromedriver"
