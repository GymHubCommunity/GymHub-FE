import { instance } from '@/apis';
import { atom, useAtom } from 'jotai';

const getInitialValue = () => {
  const storedValue = localStorage.getItem('private');
  return Boolean(storedValue) as boolean;
};

const selectedAtom = atom(getInitialValue());

function useToggleButton() {
  const [isSelected, setIsSelected] = useAtom(selectedAtom);

  const handlePrivate = async () => {
    setIsSelected((prev) => !prev);

    let disclosure = '';

    if (isSelected) {
      disclosure = 'PRIVATE';
    } else {
      disclosure = 'PUBLIC';
    }

    localStorage.setItem('private', String(isSelected));

    await instance.post(`/members/account/privacy`, null, {
      params: { policy: disclosure },
    });
  };
  return { isSelected, handlePrivate };
}

export default useToggleButton;
