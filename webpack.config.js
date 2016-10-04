var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: __dirname+ "/src",
    output: {
        path: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query:{
                    presets: ['es2015','react'],
                }
            }
        ]
    },

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
