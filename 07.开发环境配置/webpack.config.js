/**
 * 开发环境配置
 * 目的：能让代码运行即可
 * 对 01-06 总结
 */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "js/built.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      //loader的配置
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      //处理css资源
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      //处理图片资源
      {
        test: /\.(jpg|png|gif)$/,
        loader: "url-loader ",
        options: {
          limit: 8 * 1024,
          name: "[hash:10].[ext]",
          //关闭es6模块化
          esModule: false,
          //输出路径
          outputPath: "imgs",
        },
      },
      {
        //处理html中img资源
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        //处理其他资源
        exclude: /\.(html|js|css|less|jpg|png|gif)$/,
        loader: "file-loader",
        options: {
          name: "[hash:10].[ext]",
          outputPath: "media",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  mode: "development",
  devServer: {
    contentBase: resolve(__dirname, "build"),
    compress: true,
    port: 3000,
    open: true,
  },
};
