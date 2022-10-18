const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, '../src'),
    },
    allowedHosts: 'auto',
    open: true,
    compress: true,
    port: 4321,
    hot: false,
  },
};
