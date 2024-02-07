import { useState } from 'react';

function useToggleMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return { isOpen, openMenu, closeMenu };
}

export default useToggleMenu;
