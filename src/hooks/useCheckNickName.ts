import { getUserInfo } from '@/apis/user/register';
import { isCheckNameAtom } from '@/components/molecules/ResignNickName';
import { atom, useAtomValue, useSetAtom } from 'jotai';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

const nicknameAtom = atom<string>('');

function useCheckNickName() {
  const [nickName, setNickName] = useState('');
  const [memberId, setMemberId] = useState(0);
  const setIsCheckName = useSetAtom(isCheckNameAtom);
  const setNicknameAtom = useSetAtom(nicknameAtom);
  const dataNickname = useAtomValue(nicknameAtom);

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  async function handleCheckNickName(e: ChangeEvent<HTMLInputElement>) {
    if (timer.current) clearTimeout(timer.current);
    setNickName(e.target.value);

    timer.current = setTimeout(async () => {
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
    }, 500);
  }

  useEffect(() => {
    if (nickName !== dataNickname) setIsCheckName(true);
  }, [nickName]);

  return { handleCheckNickName, memberId };
}

export default useCheckNickName;
