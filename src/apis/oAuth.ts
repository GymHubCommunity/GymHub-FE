import { instance } from '@/apis';

async function getAuthorizedUrl(social: string) {
  const response = await instance.get(`/oauth/${social}/authorized_url`);
  return response.data;
}

function postOAuth(authCode: string) {
  const response = instance.post(`/oauth/kakao/login`, {
    authCode,
  });

  return response;
}

function postLogout() {
  instance.post(`/auth/logout`);
}

export { getAuthorizedUrl, postOAuth, postLogout };
