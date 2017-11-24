
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let merge = require('webpack-merge');
let base = require('./webpack.base.conf');
let path = require('path');
let outputPath = path.join(__dirname, '../public/dev');
let name = require('../package.json').name;
let config = {
    entry: {
        [name]: './src/app.js',
    },
    output: {
        path: outputPath,
        filename: '[name].js'
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
};

module.exports = merge(base, config);
