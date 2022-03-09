import Axios from "axios";
import { ElMessage } from "element-plus";

const axios = Axios.create({
  // baseURL,
  timeout: 20000,
  withCredentials: true, // 允许携带cookie
});
// 默认使用 application/json 形式
// axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
axios.interceptors.request.use(
  (config) => {
    if (config.method === "get" || config.method === "delete") {
      config.params = {
        ...config.params,
        timestamp: new Date().valueOf() /* 解决GET请求缓存问题 */,
      };
    }
    return config;
  },
  (err) => Promise.reject(err)
);

axios.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.error_code !== 0) {
      // TODO 统一处理
      return res;
    }
    return res;
  },
  (err) => {
    if (err.response && err.response.data) {
      const code = err.response.status;
      const msg = err.response.data.message;
      ElMessage.error(`Code: ${code}, Message: ${msg}`);
    } else {
      ElMessage.error(`${err}`);
    }
    return Promise.reject(err);
  }
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const $get = (url: string, params?: any, headers?: any) =>
  axios({
    url,
    method: "GET",
    params,
    headers: headers || {},
  });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const $post = (url: string, data?: any, headers?: any) => {
  return axios({
    url,
    method: "POST",
    data,
    headers: headers || {},
  });
};
