import { instance } from '@/apis';
import { atom, useAtom } from 'jotai';

const selectedAtom = atom(false);

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

    await instance.post(`/members/account/privacy`, null, {
      params: { policy: disclosure },
    });
  };
  return { isSelected, handlePrivate };
}

export default useToggleButton;
