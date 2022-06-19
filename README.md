# Webpack五个核心概念

## 一、Entry
&emsp;&emsp;入口（Entry）指示 Webpack 以哪个文件为入口起点开始打包，分析构建内部依赖图。

## 二、Output
&emsp;&emsp;输出（Output）指示 Webpack 打包后的资源 bundles 输出到那里去，以及如何命名。

## 三、Loader
&emsp;&emsp;Loader 让 Webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解JavaScript）

## 四、Plugins
&emsp;&emsp;插件（Plugins）可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等。

## 五、Mode
&emsp;&emsp;模式（Mode）指示Webpack使用相应模式的配置。

|  选项   |  <div style="width:200px">描述</div>        |  特点    |
|  ----  | ---------  | ----    |
| development  | 会将 process.env.    NODE_ENV 的值设为development。启用NamedChunksPlugin 和 NamedModulesPlugin。 |  能让代码本地调试运行的环境   |
| production  | 会将process.env.NODE_ENV 的值设为 production。启用FlagDependencyUsagePlugin，FlagIncludedChunksPlugin,ModuleConcatenationPlugin,NoEmitOnErrorsPlugin，OccurrenceOrderPlugin，SideEffectsFlagPlugin 和UglifyJsPlugin。 |   能让代码优化上线运行的环境  |

# 安装 webpack 和 webpack-cli
* npm i webpack webpack-cli -g 全局安装
* npm i webpack webpack-cli -D 本地安装

注意：webpack 中所有依赖都是开发依赖，所以 使用 -D
