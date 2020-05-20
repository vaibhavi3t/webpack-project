const path = require('path');
const webpack = require('webpack');

/**
* Available placeholder
* [hash]
* [chunkhash]
* [name]
* [id]
* [query]
* [contenthash]
*/
module.exports = {
  // Whatever config we will provide webpack will use it
  mode: "development",
  entry: {
    myfile: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "js/main.js",
    publicPath: '/assets/'
  },
  devServer: {
    port: 1234,
    contentBase: path.resolve(__dirname, 'dist'),
    writeToDisk: false,
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}