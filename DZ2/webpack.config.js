const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    mode: 'development',
    // mode: 'production',
    entry: './src/main.js',
    output: {
        filename: 'main.[contenthash].js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        // new BundleAnalyzerPlugin()
    ],

    module: {
        rules: [
            {
                test: /\\.(png|jpe?g|gif)$/i,
                use: 'file-loader'
            },

            {
                test: /.(mp3)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                }
            },

            {
                test: /\.(css)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
};

