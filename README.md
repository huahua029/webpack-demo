关于webpack有啥用，就不说了，直接入门。记录下如何操作webpack。
首先来一个package.json文件
`npm init -y`得到package.json配置文件
## 安装
文档中是：
```
npm install webpack webpack-cli --save-dev
```
*我全部用的　`sudo cnpm`安装下边所有的依赖*
## 一、第一次尝试
### 创建
##### 创建目录与文件
```
dist
  >index.html
src
  >index.js
```
##### 设置index.html为：
```
<!doctype html>
<html>
<head>
    <title>webpack-demo</title>
</head>
<body>
    <script src="./main.js"></script>
</body>
</html>
```
##### 设置index.js为：
（这里的inex.js实际上就是我们，整个项目的入口文件，待会看的比较清楚）
```
function component() {
    var element = document.createElement('div');
    element.innerHTML = 'hello webpack'

    return element
}
document.body.appendChild(component())
```
##### 运行
`npx webpack`运行，发现dist目录下，生成一个main.js文件，我们在dist目录下，启动`http-server`，是可以正常访问的。

使用配置文件来解决这个问题：
在根目录下创建`webpack.config.js`
看到入口以及出口，我们添加mode
```
const path = require('path');

module.exports = {
 mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```
现在如看main.js，还能看一点～

## 二、使用scss
当然是使用sass-loader
## 来一个scss文件
我们在src目录下创建style.scss
```
div {
    width: 600px;
    height: 300px;
    margin: 0 auto;
    background: rosybrown;
    >span {
        display: inline-block;
        padding: 20px;
    }
}
```
### 安装sass-loader
不过需要提前安装`style-loader css-loader`
```
npm install sass-loader node-sass webpack --save-dev
```

### 设置
```
// webpack.config.js
module.exports = {
  ...
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
          loader: "style-loader" // 将 JS 字符串生成为 style 节点
      }, {
          loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
      }, {
          loader: "sass-loader" // 将 Sass 编译成 CSS
      }]
    }]
  }
};
```
### 运行
就可以了～style就插入到head中了

## 三、使用ES6
ES6，在一些地方还不支持，我们需要使用babel将其转化为ES5。当然是使用`babel-loader`

### 来一点es6
我们在index.js中，将var 换为let，添加
```
console.log([1,2,3].map(x => x * x))
```

### 安装babel-loader
```
npm install -D babel-loader @babel/core @babel/preset-env webpack
```

###　使用
```
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
```
#### 运行
运行发现，实际上，已经将es6的语法转化为es5

## 四、图片
使用`file-loader`
#### 安装
```
npm install --save-dev file-loader
```
#### 引入
在index.js引入
```
import img from './google.png'
```
创建img标签
```
    let elementImg = document.createElement('img')
    elementImg.src = img
    elementDiv.appendChild(elementImg)
```
#### 配置
在`webpack.config.js`的rules中添加配置
```
{
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
```
#### 运行就行～






