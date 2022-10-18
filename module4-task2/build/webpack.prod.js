const FontminPlugin = require('fontmin-webpack');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new FontminPlugin({
      autodetect: true,
      glyphs: ['\uf0c8'],
      allowedFilesRegex: null,
      skippedFilesRegex: null,
    }),
  ],
};
