import axios from "axios";
import { isExist, getToken } from "../auth";
import { BASE_URL, TIMEOUT } from "./config";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

instance.interceptors.request.use((config) => {
  if (isExist()) {
    config.headers["Authorization"] = `Bearer ${getToken()}`;
  }
  return config;
});

instance.interceptors.response.use((response) => {
  const res = response.data;

  return res;
});

export default instance;
