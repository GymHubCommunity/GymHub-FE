import { instance } from '@/apis/index';

interface IdProp {
  id: string;
}

interface ListProps {
  id: string;
  lastId?: number;
  size: number;
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

async function getFollowings({ id, lastId = -1, size }: ListProps) {
  const response = await instance.get(
    `/members/${id}/followings?lastId=${lastId}&size=${size}`,
  );
  return response.data;
}

async function getFollowers({ id, lastId = -1, size }: ListProps) {
  const response = await instance.get(
    `/members/${id}/followers?lastId=${lastId}&size=${size}`,
  );
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
