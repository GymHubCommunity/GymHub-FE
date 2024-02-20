import { useState } from 'react';
import styles from '@/components/atoms/CheckList/CheckList.module.scss';
import CheckboxSvg from '@/assets/icons/CheckboxSvg';
import BlankboxSvg from '@/assets/icons/BlankboxSvg';

function CheckList({ children }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelected = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className={styles.wrapper} onClick={handleSelected}>
      {isSelected ? <CheckboxSvg /> : <BlankboxSvg />}
      {children}
    </div>
  );
}

export default CheckList;
