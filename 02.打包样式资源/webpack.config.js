/**
 * webpack.config.js webpack的配置文件
 * 作用：指示webpack干哪些活（当你运行 webpack 指令时，会加载里面的配置）
 *
 * 所有构建工具都是基于node.js平台运行的，模块化默认采用common.js
 */

/**
 * npm i css-loader style-loader -D
 * npm i less-loader -D
 */

//resolve 用来凭借绝对路径的方法
const { resolve } = require("path");
module.exports = {
  //入口起点
  entry: "./src/index.js",

  //输出
  output: {
    //输出文件名
    filename: "built.js",
    //输出路径
    //__dirname node.js的变量，代表当前文件的目录绝对路径
    path: resolve(__dirname, "build"),
  },

  //loader的配置
  module: {
    rules: [
      //不同文件必须配置不同loader处理
      {
        //匹配哪些文件
        test: /\.css$/,
        //使用哪些loader进行处理
        use: [
          //use 数组中loader执行顺序，从右到左，从下到上，依次执行
          //创建一个style标签，将js中的css样式资源插入进去，添加到head中生效
          "style-loader",
          //将css文件变成common.js模块加载js中，里面内容是样式字符串
          "css-loader",
        ],
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          //将less文件编译成css文件
          //需要下载less-loader和less
          "less-loader",
        ],
      },
    ],
  },

  //plugins的配置
  plugins: [],

  //模式
  mode: "development", //开发模式
  //mode: "production",//生产模式
};
