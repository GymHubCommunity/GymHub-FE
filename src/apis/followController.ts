import { BASE_URL } from '@/constants/common';
import axios from 'axios';

interface IdProp {
  id: number;
}

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
    accept: '*/*',
    // @TODO 로그인 시, access token 전역으로 관리
    Authorization:
      //'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiZXhwIjoxNzIwMTEzNTYyfQ.Hb78iNLIZYWen1HcnHFQWQQeikvAAZIPmI8xjRtge1WhtQPQYSBYeknQm04WnaI3KNR80xeGJM3T_RueShjcFg',
      'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNzEzNjg2MTEzfQ.hEB6Jsw3aRpYjZCPlSSGg77l3RC2TA8lLikvMeM7WjkCDxyWm1zh0_Va4zMuCifbQfSLkhIkqm1OJVze8n59tg',
  },
});

async function postUnfollow({ id }: IdProp) {
  const response = await instance.post(`/members/${id}/unfollow`);
  return response.data;
}

async function postFollow({ id }: IdProp) {
  const response = await instance.post(`/members/${id}/follow`);
  return response.data;
}

async function postFollower({ id }: IdProp) {
  const response = await instance.post(`/follows/${id}`);
  return response.data;
}

async function deleteFollower({ id }: IdProp) {
  const response = await instance.delete(`/follows/${id}`);
  return response.data;
}

async function getFollowings({ id }: IdProp) {
  const response = await instance.get(`/members/${id}/followings`);
  return response.data;
}

async function getFollowers({ id }: IdProp) {
  const response = await instance.get(`/members/${id}/followers`);
  return response.data;
}

export {
  postUnfollow,
  postFollow,
  postFollower,
  deleteFollower,
  getFollowings,
  getFollowers,
};
