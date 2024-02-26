import BlankboxSvg from '@/assets/icons/BlankboxSvg';
import CheckboxSvg from '@/assets/icons/CheckboxSvg';
import styles from '@/components/atoms/CheckList/CheckList.module.scss';
import useSelectedPart from '@/hooks/useSelectedPart';
import { ReactNode, useEffect, useState } from 'react';

interface CheckListProps {
  children: ReactNode;
}

function CheckList({ children }: CheckListProps) {
  const check = String(children?.toString());
  const [isSelected, setIsSelected] = useState(false);
  const { handleChecklist, selectedMachines } = useSelectedPart();

  const handleSelected = (name: string) => {
    setIsSelected(handleChecklist(name));
  };

  useEffect(() => {
    if (selectedMachines.includes(check)) setIsSelected(true);
  }, []);

  return (
    <div className={styles.wrapper} onClick={() => handleSelected(check)}>
      {isSelected ? <CheckboxSvg /> : <BlankboxSvg />}
      {children}
    </div>
  );
}

export default CheckList;
