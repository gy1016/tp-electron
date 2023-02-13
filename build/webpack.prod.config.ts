import webpack from "webpack";
import { merge } from "webpack-merge";
import baseConfig from "./webpack.base.config";

const configuration: webpack.Configuration = {
  mode: "production",
};

export default merge(baseConfig, configuration);
