import { instance } from '@/apis';
import { UserInputRegisterProps } from '@/types/user';

async function postRegister(body: UserInputRegisterProps) {
  const response = await instance.post(`/member/register`, body);
  return response;
}

export { postRegister };
