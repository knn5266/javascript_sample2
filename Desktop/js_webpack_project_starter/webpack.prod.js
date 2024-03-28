const path = require('path');
const commonConfig = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const { runInNewContext } = require('vm');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
});
