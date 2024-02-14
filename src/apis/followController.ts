import { instance } from '@/apis';

interface IdProp {
  id: number;
}

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
