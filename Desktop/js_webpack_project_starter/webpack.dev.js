// const { request } = require('http');
const path = require('path');
const commonConfig = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    open: true,
    port: 5001,
    static: {
      directory: 'dist',
    },
  },
});
