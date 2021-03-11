import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";

export default {
  input: "main.js",
  output: {
    file: "./bundle.js",
    format: "umd",
  },
  plugins: [
    resolve({ browser: true }),
    babel({
      exclude: "node_modules/**",
    }),
    commonjs(),
  ],
};
