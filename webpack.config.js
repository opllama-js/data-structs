const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "OPDataStructs",
    libraryTarget: "umd"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js"]
  }
};
