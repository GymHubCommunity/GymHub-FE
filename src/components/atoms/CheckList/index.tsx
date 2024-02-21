import { useEffect, useState } from 'react';
import styles from '@/components/atoms/CheckList/CheckList.module.scss';
import CheckboxSvg from '@/assets/icons/CheckboxSvg';
import BlankboxSvg from '@/assets/icons/BlankboxSvg';
import useSelectedPart from '@/hooks/useSelectedPart';

function CheckList({ children }) {
  const [isSelected, setIsSelected] = useState(false);
  const { handleChecklist, selectedMachines } = useSelectedPart();

  const handleSelected = (name) => {
    setIsSelected(handleChecklist(name));
  };

  useEffect(() => {
    if (selectedMachines.includes(children)) setIsSelected(true);
  }, []);

  return (
    <div className={styles.wrapper} onClick={() => handleSelected(children)}>
      {isSelected ? <CheckboxSvg /> : <BlankboxSvg />}
      {children}
    </div>
  );
}

export default CheckList;
