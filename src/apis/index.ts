import { BASE_URL } from '@/constants/common';
import axios from 'axios';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
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
    accept: '*/*',
    // @TODO 로그인 시, access token 전역으로 관리
    Authorization:
      //Bearer ${localStorage.getItem("accessToken")},
      'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNzEzNjg2MTEzfQ.hEB6Jsw3aRpYjZCPlSSGg77l3RC2TA8lLikvMeM7WjkCDxyWm1zh0_Va4zMuCifbQfSLkhIkqm1OJVze8n59tg',
  },
});

export { instance, instanceFiles, instanceAuth };
