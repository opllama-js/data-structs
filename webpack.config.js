const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "opstructs.js",
    libraryTarget: "umd",
    library: "OPDataStructs",
    libraryExport: "default",
    globalObject: "(typeof self !== 'undefined' ? self : this)",
    umdNamedDefine: true
  },
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: "babel-loader"
      }
    ]
  }
};
