const path = require('path');

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
    rules: [],
  },
  plugins: [],
};
