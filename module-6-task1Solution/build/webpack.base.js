const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const fileName = ['index', 'main', 'sup', 'test'];
const isProd = process.env.NODE_ENV === 'production';
const styleHandler = isProd ? MiniCssExtractPlugin.loader : 'style-loader';

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: fileName.reduce((config = {}, file) => {
    config[file] = `./pages/${file}.js`;
    return config;
  }, {}),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: (pathToFile) => {
      return pathToFile.chunk.name === 'js/[name].[contenthash]'
        ? 'js/[name].[contenthash].js'
        : 'js/[name].[contenthash].js';
    },
    clean: {
      dry: false,
      keep: /\.git/,
    },
  },
  plugins: [].concat(
    fileName.map(
      (file) =>
        new HtmlWebpackPlugin({
          inject: 'head',
          template: `./pages/${file}.html`,
          filename: `./${file}.html`,
          chunks: [file],
          minify: {
            html5: true,
            collapseWhitespace: true,
            removeComments: true,
            removeTagWhitespace: true,
          },
        }),
    ),
    [new MiniCssExtractPlugin()].filter(Boolean),
  ),
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: ['html-loader'],
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [styleHandler, 'css-loader', 'sass-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts?|js?)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico|avif|mp3)$/i,
        type: 'asset',
        generator: {
          filename: 'assets/img/[name][hash][ext][query]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/font/[name].[ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024,
          },
        },
      },
    ],
  },
};
