const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtraPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: './src/js/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/output.js',
    assetModuleFilename: 'images/js_images/[name][ext]',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtraPlugin.loader, 'css-loader'],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(svg|png|jpg|jpeg|ico|gif)$/,
        type: 'asset/resource',
        loader: 'image-webpack-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['app'],
    }),
    new MiniCssExtraPlugin({
      filename: './css/[name].css',
    }),
  ],
};
