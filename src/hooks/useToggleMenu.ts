import { atom, useAtom } from 'jotai';

const isOpenAtom = atom(false);

function useToggleMenu() {
  const [isOpen, setIsOpen] = useAtom(isOpenAtom);
  const openMenu = () => {
    setIsOpen(true);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return { isOpen, openMenu, closeMenu };
}

export default useToggleMenu;
