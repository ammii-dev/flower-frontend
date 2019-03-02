const { parsed: environment } = require('dotenv').config();
const webpack = require('webpack');
const withSass = require('@zeit/next-sass');
const antdLessLoader = require("next-antd-aza-less")
const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
)

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {}
}

module.exports = withSass(antdLessLoader({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables // make your antd custom effective
  },
  webpack: function (config) {
    config.plugins.push(new webpack.EnvironmentPlugin(environment));
    return config;
  },
  exportPathMap: function () {
    return {
      '/': {page: '/home/home'},
      '/index': {page: '/home/home'},
      '/find': {page: '/find/findescort'},
      '/escort': {page: '/escort/escort'},
    };
  },
}));
