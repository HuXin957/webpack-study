const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "built.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        //处理图片资源
        test: /\.(jpeg|png|gif|jpg)$/,
        //使用一个loader
        //下载url-loader  file-loader
        loader: "url-loader",
        options: {
          //图片小于8kb，就会被base64处理
          //优点：减少请求数量（减轻服务器压力）
          //缺点：图片体积会更大（文件请求速度更慢）
          limit: 8 * 1024,
          //问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是common.js
          //解析时会出现问题：[object Module]
          //解决：关闭url-loader 的es6 模块化，使用common.js解析
          //此处有坑，v.5.27.0 写不写esModule: false，都一样，但是下面的html-loader需要写
          esModule: false,
          //给图片进行重命名
          //[hash:10] 取图片的hash的前10位  [ext]取文件原来扩展名
          name:'[hash:10].[ext]'
        },
      },
      {
        test: /\.html$/,
        //处理html文件的img图片(负责引入img，从而能被url-loader进行处理)
        loader: "html-loader",
        options: {
            esModule: false
          }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  mode: "development",
};
