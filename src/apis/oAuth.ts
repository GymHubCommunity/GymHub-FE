import { instance } from '@/apis';

async function getAuthorizedUrl(social: string) {
  const response = await instance.get(`/oauth/${social}/authorized_url`);
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

export { getAuthorizedUrl, postOAuth, postLogout };
