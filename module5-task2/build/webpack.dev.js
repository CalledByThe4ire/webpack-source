const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    open: ['/pages/index/index.html'],
    compress: true,
    port: 3001,
    hot: false,
  },
};
