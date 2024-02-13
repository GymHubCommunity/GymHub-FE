import { BASE_URL } from '@/constants/common';
import axios from 'axios';
import Alert from '@/components/organisms/Alert';
import { alertParamsProps } from '@/types/alert';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
  timeout: 5000,
});

const instanceFiles = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    let alertParams: alertParamsProps = {
      errorMessage:
        error.response?.data?.message ?? '관리자에게 문의 바랍니다.',
      status: error.response?.status,
    };

    if (error.code === 'ECONNABORTED') {
      alertParams = {
        errorMessage: '응답 시간이 초과되었습니다.',
        status: 408,
      };
    }

    Alert(alertParams);

    return Promise.reject(error);
  },
);

export { instance, instanceFiles };
