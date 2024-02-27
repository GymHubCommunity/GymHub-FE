'use client';
import { useState } from 'react';

function useToggleMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return { isOpen, toggleMenu, closeMenu };
}

export default useToggleMenu;
