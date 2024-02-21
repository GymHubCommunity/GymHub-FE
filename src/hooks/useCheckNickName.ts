import { isCheckNameAtom } from '@/components/molecules/ResignNickName';
import { useSetAtom } from 'jotai';
import { ChangeEvent, useEffect, useState } from 'react';

function useCheckNickName(nickname: string) {
  const [nickName, setNickName] = useState('');
  const setIsCheckName = useSetAtom(isCheckNameAtom);

  const handleCheckNickName = (e: ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
    if (e.target.value === nickname) {
      setIsCheckName(false);
    }
  };

  console.log(nickName)
  useEffect(() => {
    if (nickName !== nickname) setIsCheckName(true);
  }, [nickName]);

  return { handleCheckNickName };
}

export default useCheckNickName;
