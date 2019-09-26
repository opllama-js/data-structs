import babel from "rollup-plugin-babel";
import minify from "rollup-plugin-babel-minify";
module.exports = {
  input: "./src/index.js",
  output: {
    file: "dist/index.js",
    format: "umd",
    name: "OPStructs"
  },
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    minify({
      sourceMap: true
    })
  ]
};
