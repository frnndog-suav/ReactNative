import { AppError } from "@utils/appError";
import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.15.105:3333",
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message));
    }

    return Promise.reject(new AppError(error));
  }
);

export { api };
