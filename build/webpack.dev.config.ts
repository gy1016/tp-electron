import path from "path";
import webpack from "webpack";
import "webpack-dev-server";
import { merge } from "webpack-merge";
import baseConfig from "./webpack.base.config";

const configuration: webpack.Configuration = {
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "../dist"),
    },
    compress: true,
    port: 9527,
    open: true,
    hot: true,
    proxy: {
      // '/api': 'http://localhost:9000',
    },
    historyApiFallback: true,
  },
};

export default merge(baseConfig, configuration);
