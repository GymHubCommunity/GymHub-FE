import { BASE_URL, AWS_S3_URL } from '@/constants/common';
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

const instanceAuth = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
    // @TODO 로그인 시, access token 전역으로 관리
    Authorization:
      //Bearer ${localStorage.getItem("accessToken")},
      'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNzEzNjg2MTEzfQ.hEB6Jsw3aRpYjZCPlSSGg77l3RC2TA8lLikvMeM7WjkCDxyWm1zh0_Va4zMuCifbQfSLkhIkqm1OJVze8n59tg',
  },
});

const instanceAWS = axios.create({
  baseURL: AWS_S3_URL,
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

export { instance, instanceFiles, instanceAuth, instanceAWS };
