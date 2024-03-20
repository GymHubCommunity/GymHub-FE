import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export interface LoginUserProps {
  email: string;
  id: number;
  nickname: string;
  profileUrl: string;
}

const loginUserAtom = atomWithStorage<LoginUserProps | null>('loginUser', {
  email: '',
  id: 0,
  nickname: '',
  profileUrl: '',
});

function useLoginUser(): [
  LoginUserProps | null,
  (userInfo: LoginUserProps | null) => void,
  () => void,
] {
  const [loginUser, setLoginUser] = useAtom(loginUserAtom);

  const initUser = () => {
    if (!loginUser) return;
    setLoginUser(null);
  };

  const setUser = (userInfo: LoginUserProps | null) => {
    setLoginUser(userInfo);
  };

  return [loginUser, setUser, initUser];
}

export default useLoginUser;
