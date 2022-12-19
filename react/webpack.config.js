const path = require("path");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "output"),
    filename: "main.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/')
    }
  }
};
