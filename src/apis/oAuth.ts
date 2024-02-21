import { instance } from '@/apis';
import { BASE_URL } from '@/constants/common';
import axios from 'axios';

async function getAuthorizedUrl(social: string) {
  const response = await axios.get(
    `${BASE_URL}/oauth/${social}/authorized_url`,
  );
  return response.data;
}

async function postOAuth(social: string, authCode: string) {
  const response = await instance.post(`/oauth/${social}/login`, {
    authCode,
  });

  return response;
}

async function postLogout() {
  return instance.post(`/auth/logout`);
}

instance.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] =
      `Bearer ${localStorage.getItem('accessToken')}`;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

export { getAuthorizedUrl, postOAuth, postLogout };
