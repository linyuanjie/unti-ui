import axios from "axios";
import { VueAxios } from "./axios";
import { notification } from "ant-design-vue";
// import { ACCESS_TOKEN } from "@/store/mutation-types";

let downloadLoadingInstance;
const baseURL = process.env.VUE_APP_API_BASE_URL;
// 创建 axios 实例
const request = axios.create({
  baseURL: baseURL, // api base_url
  timeout: 6000, // 请求超时时间
});
export const pureAxios = axios.create({
  baseURL: baseURL, // api base_url
  timeout: 6000, // 请求超时时间
});

const err = (error) => {
  if (error.response) {
    const data = error.response.data;
    // const token = storage.get(ACCESS_TOKEN);
    if (error.response.status === 403) {
      notification.error({
        message: "Forbidden",
        description: data.message,
      });
    }
    if (
      error.response.status === 401 &&
      !(data.result && data.result.isLogin)
    ) {
      notification.error({
        message: "Unauthorized",
        description: "Authorization verification failed",
      });
      // if (token) {
      //   setTimeout(() => {
      //     window.location.reload();
      //   }, 1500);
      // }
    }
  }
  return Promise.reject(error);
};

// request interceptor
request.interceptors.request.use((config) => {
  // const token = storage.get(ACCESS_TOKEN);
  // if (token) {
  //   config.headers["token"] = token; // 让每个请求携带自定义 token 请根据实际情况自行修改
  // }
  return config;
}, err);

pureAxios.interceptors.request.use((config) => {
  // const token = storage.get(ACCESS_TOKEN);
  // if (token) {
  //   config.headers["token"] = token; // 让每个请求携带自定义 token 请根据实际情况自行修改
  // }
  return config;
}, err);

// response interceptor
request.interceptors.response.use((response) => {
  return response.data;
}, err);

const installer = {
  vm: {},
  install(Vue) {
    Vue.use(VueAxios, request);
  },
};

export default request;

export { installer as VueAxios, request as axios };
