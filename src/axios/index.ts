import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default axiosInstance;
