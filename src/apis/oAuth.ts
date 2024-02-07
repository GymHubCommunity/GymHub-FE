import { instance } from '@/apis';

interface SocialProp {
  social: string;
}

async function postOAuth({ social }: SocialProp) {
  const response = await instance.post(`/oauth/${social}/login`);
  return response.data;
}

export { postOAuth };
