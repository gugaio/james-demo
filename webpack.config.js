const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply Babel to all .js files
        exclude: /node_modules/, // Don't apply Babel to node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // Use Babel's preset-env for modern JS
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    hot: true,
    proxy: [
      {
        context: ['/myjames'],
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/james': ''
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@james': path.resolve(__dirname, 'src/shims/james-shim.js'),
  },
  }
};