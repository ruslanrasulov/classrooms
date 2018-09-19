const webpack = require('webpack');
const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/index.js',
    output: {
        path: outputPath,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: '/node_modules/',
                use: ['babel-loader']
            },
            {
                test: /\.(scss|sass)/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            { 
                test: /\.(png|gif|woff|woff2|eot|ttf|svg)$/, 
                loader: 'url-loader?limit=100000' 
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html',
            path: outputPath
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: outputPath,
        port: 3000,
        inline: true,
        hot: true
    }
}

module.exports = config;