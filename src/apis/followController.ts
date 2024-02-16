import { BASE_URL } from '@/constants/common';
import axios from 'axios';
import { instanceAuth } from '@/apis/index';

interface IdProp {
  id: number;
}

async function postUnfollow({ id }: IdProp) {
  const response = await instanceAuth.post(`/members/${id}/unfollow`);
  return response.data;
}

async function postFollow({ id }: IdProp) {
  const response = await instanceAuth.post(`/members/${id}/follow`);
  return response.data;
}

async function postFollower({ id }: IdProp) {
  const response = await instanceAuth.post(`/follows/${id}`);
  return response.data;
}

async function deleteFollower({ id }: IdProp) {
  const response = await instanceAuth.delete(`/follows/${id}`);
  return response.data;
}

async function getFollowings({ id }: IdProp) {
  const response = await instanceAuth.get(`/members/${id}/followings`);
  return response.data;
}

async function getFollowers({ id }: IdProp) {
  const response = await instanceAuth.get(`/members/${id}/followers`);
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
