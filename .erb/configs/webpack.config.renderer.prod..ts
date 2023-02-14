import webpack from "webpack";
import { merge } from "webpack-merge";
import baseConfig from "./webpack.config.base";

const configuration: webpack.Configuration = {
  mode: "production",
};

export default merge(baseConfig, configuration);
