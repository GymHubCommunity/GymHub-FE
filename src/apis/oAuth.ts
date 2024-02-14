import { instance } from '@/apis';

async function getAuthorizedUrl(social: string) {
  const response = await instance.get(`/oauth/${social}/authorized_url`);
  console.log(response.data);
  return response.data;
}

async function postOAuth({
  social,
  authCode,
}: {
  social: string;
  authCode: string;
}) {
  const response = await instance.post(`/oauth/${social}/login`, authCode);
  return response.data;
}

export { getAuthorizedUrl, postOAuth };
