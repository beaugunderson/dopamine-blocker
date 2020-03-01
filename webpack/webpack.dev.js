const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtensionReloader = require('webpack-extension-reloader');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  plugins: [
    new ExtensionReloader({
      entries: { contentScript: 'content_script', background: 'background' }
    })
  ]
});
