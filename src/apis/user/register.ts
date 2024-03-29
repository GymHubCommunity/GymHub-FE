import { instance } from '@/apis';
import { UserInputRegisterProps } from '@/types/user';
import { deleteCookie, getCookie } from 'cookies-next';

async function postRegister(data: UserInputRegisterProps) {
  const response = await instance.post(`/members/register`, data);
  return response;
}

async function postRefreshToken(refresh: string) {
  const response = await instance.post(`/auth/refresh`, refresh);
  return response;
}

// 회원 정보 조회
async function getUserInfo() {
  const response = await instance.get(`/members/me`);
  return response;
}

// 회원 정보 조회 with memberId
async function getUserInfoMemberId(memberId: number) {
  const response = await instance.get(`/members/${memberId}`);
  return response;
}

// 회원 정보 삭제
async function deleteUser(memberId: number) {
  await instance.delete(`/members/${memberId}`);
}

// 회원 정보 수정
async function putUserInfo(data: UserInputRegisterProps) {
  const response = await instance.put(`/members/me`, data);
  return response;
}

export const authToken = {
  access: (() => {
    try {
      return getCookie('accessToken');
    } catch (err) {
      return null;
    }
  })(),
  refresh: (() => {
    try {
      return getCookie('refresh');
    } catch (err) {
      return null;
    }
  })(),
  refetch: () => {
    authToken.access = getCookie('accessToken');
    authToken.refresh = getCookie('refresh');
    return;
  },
  destroy: () => {
    deleteCookie('accessToken');
    deleteCookie('refresh');
    authToken.access = null;
    authToken.refresh = null;
  },
};

export {
  deleteUser,
  getUserInfo,
  getUserInfoMemberId,
  postRefreshToken,
  postRegister,
  putUserInfo,
};
