/**
 * Created by Huangzufu on 2017/4/12.
 */
var path = require('path');
console.log(path)
module.exports = {
    entry:path.resolve(__dirname,'js/webpack-test.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    loaders: [
        {
            test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
            loader: 'babel',// 加载模块 "babel" 是 "babel-loader" 的缩写
            query: {
                presets: ['es2015', 'react']
            }
        },
        {
            test: /\.css$/,
            loader: 'style!css' // 如果有多个加载器，中间用感叹号隔开，多个加载器从右往左执行
        }
    ]
}
