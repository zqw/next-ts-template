###  写代码时要注意

* src/api, src/config, server.js, nextRoutes.js 里面的代码都要使用commonjs的方式来写代码
* pages,public下面的代码使用es6模块来写
* static目录下面存放一些不用编译的静态资源
* 如何调试后端代码,须做到三点:1)将server.ts中isDev设为false 2)执行npm run build 3)点击debug运行.tmp/server.js,打上断点即可调试


