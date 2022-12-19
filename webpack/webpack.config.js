const path = require("path");

module.exports = {
  entry: "./src/index.js",
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
