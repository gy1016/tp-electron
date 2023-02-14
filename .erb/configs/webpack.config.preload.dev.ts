import path from "path";
import webpack from "webpack";
import { merge } from "webpack-merge";
import baseConfig from "./webpack.config.base";
import webpackPaths from "./webpack.paths";

const configuration: webpack.Configuration = {
  mode: "development",
  target: "electron-preload",
  entry: path.join(webpackPaths.srcMainPath, "preload.ts"),
  output: {
    path: webpackPaths.dllPath,
    filename: "preload.js",
  },
  watch: true,
};

export default merge(baseConfig, configuration);
