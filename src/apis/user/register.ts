import { instanceFiles } from '@/apis';

async function postRegister() {
  const response = await instanceFiles.post(`/member/register`);
  return response.data;
}

export { postRegister };
