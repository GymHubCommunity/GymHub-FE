import { atom, useAtom } from 'jotai';

const isOpenAtom = atom(false);

function useToggleMenu() {
  const [isOpen, setIsOpen] = useAtom(isOpenAtom);
  
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return { isOpen, toggleMenu, closeMenu };
}

export default useToggleMenu;
