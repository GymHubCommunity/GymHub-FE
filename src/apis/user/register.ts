import { UserInputRegisterProps } from '@/types/user';
import { deleteCookie, getCookie } from 'cookies-next';
import { instance } from '@/apis';

async function postRegister(body: UserInputRegisterProps) {
  const response = await instance.post(`/member/register`, body);
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
      return getCookie('refreshToken');
    } catch (err) {
      return null;
    }
  })(),
  refetch: () => {
    authToken.access = getCookie('accessToken');
    authToken.refresh = getCookie('refreshToken');
    return;
  },
  destroy: () => {
    deleteCookie('accessToken');
    deleteCookie('refreshToken');
    authToken.access = null;
    authToken.refresh = null;
  },
};

export { postRegister, postRefreshToken };
