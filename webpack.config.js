const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { resolve, join } = require('path');

const exclude = /node_modules/;
const appFolder = resolve(__dirname, './src');
const publicFolder = resolve(__dirname, 'public');
const distFolder = join(publicFolder, 'js');

const babelRule = {
  test: /\.(js|jsx)$/,
  exclude,
  use: {
    loader: 'babel-loader',
  },
};

const htmlRule = {
  test: /\.html$/,
  use: [
    {
      loader: 'html-loader',
    },
  ],
};

const styleRule = {
  test: /\.scss$/,
  use: ['style-loader', 'css-loader', 'sass-loader'],
};

module.exports = {
  entry: resolve(appFolder, 'main.js'),
  output: {
    path: distFolder,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [babelRule, htmlRule, styleRule],
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebPackPlugin({
      template: join(appFolder, 'index.html'),
      filename: join(publicFolder, 'index.html'),
    }),
  ],
  resolve: {
    modules: [appFolder, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      components: join(appFolder, 'components'),
      styles: join(appFolder, 'scss'),
      utils: join(appFolder, 'utils'),
    },
  },
};
