const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'client/src'),
  entry: {
    app: './index.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'client/dist/'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
