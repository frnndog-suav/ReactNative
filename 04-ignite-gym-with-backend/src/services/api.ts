import { AppError } from "@utils/appError";
import axios, { AxiosInstance } from "axios";

type TSignOut = () => void;

type TApiInstanceProps = AxiosInstance & {
  registerInterceptTokenManager: (signOut: TSignOut) => () => void;
};

const api = axios.create({
  baseURL: "http://192.168.15.105:3333",
}) as TApiInstanceProps;

api.registerInterceptTokenManager = (signOut) => {
  const interceptTokenManager = api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.data) {
        return Promise.reject(new AppError(error.response.data.message));
      }

      return Promise.reject(new AppError(error));
    }
  );

  return () => {
    api.interceptors.response.eject(interceptTokenManager);
  };
};

export { api };
