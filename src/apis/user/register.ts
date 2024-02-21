import { UserInputRegisterProps } from '@/types/user';
import { deleteCookie, getCookie } from 'cookies-next';
import { instance } from '@/apis';

async function postRegister(data: UserInputRegisterProps) {
  const response = await instance.post(`/members/register`, data);
  return response;
}

async function postRefreshToken(refresh: string) {
  const response = await instance.post(`/auth/refresh`, refresh);
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

export { postRegister, postRefreshToken };
