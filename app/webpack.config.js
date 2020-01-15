const path = require ('path');

module.exports = {
  mode: 'production',
  entry: {
    popup: './src/popup.jsx',
    background: './src/background.js',
    content: './src/content.js',
    'jquery-3.4.1.min': './src/jquery-3.4.1.min.js',
  },
  output: {
    path: path.resolve (__dirname + '/dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [['@babel/plugin-transform-react-jsx', {pragma: 'h'}]],
          },
        },
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          'sass-loader',
        ],
      },
    ],
  },
  node: {
    fs: 'empty',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
