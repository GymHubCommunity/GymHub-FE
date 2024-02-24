import { isCheckNameAtom } from '@/components/molecules/ResignNickName';
import { postProfile } from '@/constants/MockData';

import { useSetAtom } from 'jotai';
import { ChangeEvent, useEffect, useState } from 'react';

function useCheckNickName() {
  const [nickName, setNickName] = useState('');
  const setIsCheckName = useSetAtom(isCheckNameAtom);

  const handleCheckNickName = (e: ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
    if (e.target.value === postProfile.name) {
      setIsCheckName(false);
    }
  };

  useEffect(() => {
    if (nickName !== postProfile.name) setIsCheckName(true);
  }, [nickName]);

  return { handleCheckNickName };
}

export default useCheckNickName;
