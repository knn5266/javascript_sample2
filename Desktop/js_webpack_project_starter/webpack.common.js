const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { app: './src/js/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/output.js',
    assetModuleFilename: 'images/js_images/[name][ext]',
  },
  module: {
    rules: [],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: 'app',
    }),
  ],
};
