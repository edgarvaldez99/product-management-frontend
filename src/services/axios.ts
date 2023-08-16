/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios";
import { API_BASE_URL } from "src/env";
import { getToken } from "src/utils/token";

const instance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(function (config) {
  const tokenData = getToken();
  if (tokenData && tokenData.access) {
    config.headers.Authorization = `Bearer ${tokenData.access}`;
  }
  return config;
});

instance.interceptors.response.use(function <TData = any, TConfig = any>(
  response: AxiosResponse<TData, TConfig>,
) {
  const data: any = response.data;
  return data;
});

export default instance;
