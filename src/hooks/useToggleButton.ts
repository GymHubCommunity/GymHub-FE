import { instance } from '@/apis';
import { atom, useAtom } from 'jotai';

const getInitialSelectedValue = () => {
  if (typeof window !== 'undefined') {
    return Boolean(localStorage.getItem('private')) ?? false;
  }
  return false;
};

const selectedAtom = atom(getInitialSelectedValue());

function useToggleButton() {
  const [isSelected, setIsSelected] = useAtom(selectedAtom);

  console.log(isSelected);
  const handlePrivate = async () => {
    setIsSelected((prev: boolean) => !prev);

    const disclosure = isSelected ? 'PRIVATE' : 'PUBLIC';

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('private', String(isSelected));
    }

    await instance.post(`/members/account/privacy`, null, {
      params: { policy: disclosure },
    });
  };
  return { isSelected, handlePrivate };
}

export default useToggleButton;
