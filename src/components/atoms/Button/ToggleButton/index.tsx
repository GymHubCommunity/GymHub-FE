import styles from '@/components/atoms/Button/ToggleButton/ToggleButton.module.scss';
import { useState } from 'react';

function ToggleButton() {
  const [isSelected, setIsSelected] = useState(false);

  // @TODO CSS 수정
  return (
    <label className={styles.label}>
      <p className={styles.content}>{isSelected ? '공개' : '비공개'}</p>
      <input
        type="checkbox"
        className={styles.input}
        checked={isSelected}
        onChange={() => setIsSelected((prev) => !prev)}
      />
      <div className={styles.toggleSlider} />
    </label>
  );
}

export default ToggleButton;
