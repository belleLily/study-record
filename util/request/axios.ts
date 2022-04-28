// vite 比较简洁

import Axios from 'axios';
import { Toast } from 'vant';

const axios = Axios.create({
  baseURL: import.meta.env.VITE_APP_URL,
  timeout: 20000 // 请求超时 20s
});

axios.interceptors.request.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    const { data, status } = response;
    if (status === 200 && data.RC === 0) {
      return data.DATA;
    } else {
      Toast(data.MSG);
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export default axios;
