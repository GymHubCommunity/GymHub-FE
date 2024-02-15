import { instance } from '@/apis';

async function getAuthorizedUrl(social: string) {
  const response = await instance.get(`/oauth/${social}/authorized_url`);
  return response.data;
}

function postOAuth(authCode: string) {
  const data = instance.post(`/oauth/kakao/login`, {
    authCode,
  });

  return data;
}

function postLogout() {
  instance.post(`/auth/logout`);
}

export { getAuthorizedUrl, postOAuth, postLogout };
