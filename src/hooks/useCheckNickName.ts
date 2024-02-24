import { getUserInfo } from '@/apis/user/register';
import { isCheckNameAtom } from '@/components/molecules/ResignNickName';
import { useSetAtom } from 'jotai';
import { ChangeEvent, useEffect, useState } from 'react';

function useCheckNickName(memberId: number) {
  const [nickName, setNickName] = useState('');
  const setIsCheckName = useSetAtom(isCheckNameAtom);

  async function handleCheckNickName(e: ChangeEvent<HTMLInputElement>) {
    setNickName(e.target.value);
    try {
      const response = await getUserInfo(memberId);

      if (e.target.value === response.data.nickname) {
        setIsCheckName(false);
      }
    } catch (e) {
      console.log(e);
    }
  }

  console.log(nickName);

  useEffect(() => {
    // if (nickName !== postProfile.name) setIsCheckName(true);
  }, [nickName]);

  return { handleCheckNickName };
}

export default useCheckNickName;
