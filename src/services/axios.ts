/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosResponse } from "axios";
import { API_BASE_URL } from "src/env";
import { ErrorResponse } from "src/interfaces/errors";
import { logout } from "src/utils/logout";
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

instance.interceptors.response.use(
  function <TData = any, TConfig = any>(
    response: AxiosResponse<TData, TConfig>,
  ) {
    const data: any = response.data;
    return data;
  },
  function (error: AxiosError<ErrorResponse>) {
    let errorMessage: string;
    if (
      error.response?.data?.message === "AccessToken Not Found - Get Principal"
    ) {
      errorMessage = "No tiene permiso para acceder a este recurso";
    } else if (error.response?.data?.message) {
      errorMessage = error.response?.data?.message;
    } else if (error.message === "Network Error") {
      errorMessage = "No se pudo conectar al Servidor";
    } else if (error.response?.status === 401) {
      errorMessage = "";
      logout();
      location.replace("/login");
    } else if (error.response?.data) {
      errorMessage = Object.entries(error.response?.data)
        .map(([key, value]) => `${key.toUpperCase()}: ${value}`)
        .join(" ");
    } else {
      errorMessage = error.message;
    }
    return Promise.reject(errorMessage);
  },
);

export default instance;
