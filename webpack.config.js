const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        contentBase: '.'
    },
    plugins: [
        new htmlWebpackPlugin({  //在内存中生成html
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'  //指定要生成的文件名，起什么都ok，一般是index
        }),
        new VueLoaderPlugin()
    ],
    module: { //这是一个对象，不用加s ‘复数‘，用于配置第三方模块加载器
        rules: [ //匹配规则
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.jpeg|jpg|png|gif|bmp$/, use: 'url-loader?limit=181590&name=[hash:8]-[name].[ext]'},
            // 问好后面的是传参，进行各种设置
            {test: /\.ttf|eot|svg|wof|woff$/, use: 'url-loader'},
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
            // class属于ES6，但webpack不支持所有的ES6,所以要用上面的包转换，并且转换的文件要排除node_modules下的，因为这个文件夹下的内容已经转过了
            // 安装：1. cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
            //2.  cnpm i babel-preset-env babel-preset-stage-0 -D
            {test: /\.vue$/, use: 'vue-loader'}
        ]

    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.js"  // 修改vue被导入时的路径
        }
    }
}