const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //入口 从哪个文件开始打包
  devServer:{ //开发服务器配置
    port:3000,
    progress:true,
    contentBase:'./dist',
    open:true
  },
  mode:'development', //模式 默认两种 production development
  entry:'./src/index.js',
  output:{
    filename:'bundle.js', //打包后的文件名
    path: path.resolve(__dirname,'dist'), //路径 必须是一个绝对路径 resolve就是解析的意思
  },

  plugins:[ //数组 放着所有的webpack插件
    new HtmlWebpackPlugin({
      template:'./src/index.html',  //模板文件
      filename:'index.html', //打包后的文件名
      minify:{  //压缩
        removeAttributeQuotes:true, //压缩双引号
        collapseWhitespace:true,  //变成一行
      },
      hash:true,  //生成的html的js后面有哈希戳
    })
  ]
}