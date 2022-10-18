// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const fileName = ['index', 'main'];

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

const config = {
  context: path.resolve(__dirname, './src'),
  entry: fileName.reduce((conf, page) => {
    conf[page] = `./${page}.js`;
    return conf;
  }, {}),
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    open: true,
    host: 'localhost',
    hot: false,
  },
  plugins: [].concat(
    fileName.map(
      (file) =>
        new HtmlWebpackPlugin({
          inject: 'head',
          template: `./${file}.html`,
          filename: `./${file}.html`,
          chunks: [file],
        }),
    ),
  ),
  module: {
    rules: [
      {
        test: /\.(html)$/i,
        use: 'html-loader',
      },
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';

    config.plugins.push(new MiniCssExtractPlugin());
  } else {
    config.mode = 'development';
  }
  return config;
};
