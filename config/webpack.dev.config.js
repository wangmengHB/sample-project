
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let merge = require('webpack-merge');
let base = require('./webpack.base.config');
let path = require('path');
let outputPath = path.join(__dirname, '../public/dev');

let config = {
    output: {
        path: outputPath
    },
    plugins: [
        new ExtractTextPlugin('css/[name].css')
    ]
};

module.exports = merge(base, config);
