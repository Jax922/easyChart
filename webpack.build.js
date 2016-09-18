/**
 * Created by metrokobe on 16/9/17.
 */
/**
 * Created by metrokobe on 16/9/7.
 */
const path = require('path');

const ROOT = path.resolve(__dirname, './');
const BUILD_DIR = path.resolve(__dirname, './build');
const NODE_MODULES = path.resolve(__dirname, 'node_modules');
const config = {
    entry: {Chart: './src/charts/Chart.js'},
    output: {
        path: BUILD_DIR,
        filename: '[name].js',
        libraryTarget: "umd",
        publicPath: 'http://127.0.0.1:15140/build/'
    },
    externals: {
        "react": 'react',
        'react-dom': 'react-dom',
        'echarts': 'echarts'
    },
    resolve  : {
        root      : [ROOT, NODE_MODULES],
        alias     : {
            'react'    : 'react',
            'react-dom': 'react-dom',
            '_'        : path.resolve(__dirname, 'lodash/core'),
            'lodash'   : path.resolve(__dirname, 'lodash/core')
        },
        extensions: ['', '.js', '.json', '.jsx']
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css?minimize'},
            {test: /\.less$/, loader: 'style!css?minimize!less'},
            {
                test   : /(\.js)|(\.jsx)$/,
                loader : 'babel',
                query  : {
                    presets         : [
                        "es2015"//可能会卡,慎重开启
                        , "stage-0"//开启es6支持
                        , "stage-1"//开启es6支持
                        , "stage-2"//开启es6支持
                        , "stage-3"//开启es6支持
                        , "react"//开启react支持
                    ],
                    "plugins": [
                        "add-module-exports"
                    ]
                    , cacheDirectory: true
                },
                exclude: [/(node_modules|bower_components)/]
            },
            {
                test  : /.*\.json$/,
                loader: 'json-loader'
            }
        ]
    }
}

module.exports = config;