let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let UglifyJSPlugin = require('uglifyjs-webpack-plugin');
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
let version = require('../package.json').version;
let merge = require('webpack-merge');
let base = require('./webpack.base.config');
let path = require('path');
let outputPath = path.join(__dirname, '../public/', version);

let config = {
    output: {
        path: outputPath,
        filename: 'js/[name].min.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: '"production"' }
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].min.css'
        }),
        new UglifyJSPlugin(),
        new OptimizeCssAssetsPlugin()
    ],
    target: 'web',
    externals: {
        'babel-polyfill': 'core',
        'jquery': 'jQuery',
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router': 'ReactRouter',
        'react-router-dom': 'ReactRouterDOM',
        'prop-types': 'PropTypes',
        'moment': 'moment'
    }
};

module.exports = merge(base, config);
