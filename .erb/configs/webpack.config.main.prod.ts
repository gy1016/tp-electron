import path from "path";
import webpack from "webpack";
import { merge } from "webpack-merge";
import TerserPlugin from "terser-webpack-plugin";
import baseConfig from "./webpack.config.base";
import webpackPaths from "./webpack.paths";

const configuration: webpack.Configuration = {
  devtool: "source-map",
  mode: "production",
  target: "electron-main",
  entry: {
    main: path.join(webpackPaths.srcMainPath, "main.ts"),
    preload: path.join(webpackPaths.srcMainPath, "preload.ts"),
  },
  output: {
    path: webpackPaths.distMainPath,
    filename: "[name].js",
    library: {
      type: "umd",
    },
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
    ],
  },
};

export default merge(baseConfig, configuration);
