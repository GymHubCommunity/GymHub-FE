import { getUserInfo } from '@/apis/user/register';
import { isCheckNameAtom } from '@/components/molecules/ResignNickName';
import { atom, useAtomValue, useSetAtom } from 'jotai';
import { ChangeEvent, useEffect, useState } from 'react';

const nicknameAtom = atom<string>('');

function useCheckNickName() {
  const [nickName, setNickName] = useState('');
  const [memberId, setMemberId] = useState(0);
  const setIsCheckName = useSetAtom(isCheckNameAtom);
  const setNicknameAtom = useSetAtom(nicknameAtom);
  const dataNickname = useAtomValue(nicknameAtom);

  async function handleCheckNickName(e: ChangeEvent<HTMLInputElement>) {
    setNickName(e.target.value);
    try {
      const response = await getUserInfo();

      if (e.target.value === response.data.nickname) {
        setIsCheckName(false);
      }
      setMemberId(response.data.id);
      setNicknameAtom(response.data.nickname);
    } catch (e) {
      console.log(e);
    }
  }

  console.log(memberId);
  console.log(nicknameAtom);

  useEffect(() => {
    if (nickName !== dataNickname) setIsCheckName(true);
  }, [nickName]);

  return { handleCheckNickName, memberId };
}

export default useCheckNickName;
