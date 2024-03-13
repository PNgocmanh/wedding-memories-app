import axios from "axios";

const url = "https://6597b33e668d248edf233783.mockapi.io/app/v1";

const AxiosInstance = axios.create({
  baseURL: url,
  headers: {
    "content-type": "application/json",
  },
});

AxiosInstance.interceptors.request.use(
  (config) => {
    const token = `Bearer ${localStorage.getItem("accessToken")}`;
    config.headers["Authorization"] = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default AxiosInstance;