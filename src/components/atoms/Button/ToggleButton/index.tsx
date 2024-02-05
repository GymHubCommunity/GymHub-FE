'use client';
import styles from '@/components/atoms/Button/ToggleButton/ToggleButton.module.scss';
import { useState } from 'react';

function ToggleButton() {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectedTrue = () => {
    setIsSelected(true);
  };

  const handleSelectedFalse = () => {
    setIsSelected(false);
  };

  // @TODO CSS 수정
  return (
    <>
      <button
        type="button"
        className={isSelected ? styles.red : styles.green}
        onClick={handleSelectedTrue}
      />
      <button
        type="button"
        className={isSelected ? styles.green : styles.red}
        onClick={handleSelectedFalse}
      />
    </>
  );
}

export default ToggleButton;
