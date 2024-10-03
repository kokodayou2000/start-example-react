import axios from 'axios';
import { message } from 'antd';

const instance = axios.create({
  timeout: 10 * 1000,
  baseURL: 'http://localhost:10012',
});

// request 拦截：每次请求都带上 token
instance.interceptors.request.use(
  (config) => {
    config.headers['token'] = window.localStorage.getItem('token')
      ? window.localStorage.getItem('token')
      : '';
    return config;
  },
  (error) => Promise.reject(error),
);

// response 拦截：统一处理 errno 和 msg
instance.interceptors.response.use((response) => {
  const res = response.data || {};
  const { code, data, msg } = res;

  if (code !== 200) {
    // 错误提示
    if (msg) {
      message.error(msg).then((r) => message.error(r));
    }

    throw new Error(msg);
  }

  return data;
});

export default instance;
