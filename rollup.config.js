import babel from "rollup-plugin-babel";
import minify from "rollup-plugin-babel-minify";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
module.exports = {
  input: "./src/index.js",
  output: [
    {
      file: "dist/index.js",
      format: "umd",
      name: "OPStructs",
      sourcemap: true
    },
    {
      file: "dist/index.esm.js",
      format: "es",
      sourcemap: true
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: "node_modules/**"
    }),
    minify({
      sourceMap: true
    })
  ]
};
