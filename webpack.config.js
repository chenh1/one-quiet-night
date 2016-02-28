var webpack = require('webpack');

module.exports = {
  entry: './js/app.jsx',
  output: {
    path: './lib',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  externals: {
    'react': 'React',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
