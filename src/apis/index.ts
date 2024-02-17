import { BASE_URL } from '@/constants/common';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { getCookie, setCookie } from 'cookies-next';
import { authToken, postRefreshToken } from './user/register';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
  timeout: 5000,
});

const instanceFiles = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

const instanceWithCookie = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
  withCredentials: true,
  timeout: 5000,
});

export { instance, instanceFiles, instanceWithCookie };

function responsefulfilledInterceptor(res: AxiosResponse) {
  if (200 <= res.status && res.status < 300) {
    return res;
  }
  return Promise.reject(res.data);
}

async function responseRejectedInterceptor(error: AxiosError) {
  if (error.response?.status === 401) {
    const refreshToken = getCookie('refresh') as string;

    try {
      const token = await postRefreshToken(refreshToken);

      if (token) {
        authToken.destroy();
        setCookie('accessToken', token.data.accessToken);
        setCookie('refresh', refreshToken);
      }
    } catch (e) {
      authToken.destroy();
      console.log(e);
    }

    await new Promise((res) => res);
    return null;
  }

  return error;
}

instance.interceptors.response.use(
  responsefulfilledInterceptor,
  responseRejectedInterceptor,
);
