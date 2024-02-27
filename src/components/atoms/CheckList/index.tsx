import BlankboxSvg from '@/assets/icons/BlankboxSvg';
import CheckboxSvg from '@/assets/icons/CheckboxSvg';
import styles from '@/components/atoms/CheckList/CheckList.module.scss';
import useSelectedPart from '@/hooks/useSelectedPart';
import { ReactNode, useEffect, useState } from 'react';

interface CheckListProps {
  id: number;
  children: ReactNode;
}

function CheckList({ id, children }: CheckListProps) {
  const check = String(children?.toString());
  const [isSelected, setIsSelected] = useState(false);
  const { handleChecklist, selectedMachines, setSelectedMachines } =
    useSelectedPart();

  const handleSelected = (name: string) => {
    if (!isSelected) {
      setIsSelected(handleChecklist(id, name));
    } else {
      setIsSelected(false);
      setSelectedMachines(selectedMachines.filter((val) => val.id !== id));
    }
  };

  useEffect(() => {
    if (selectedMachines.includes(check)) {
      setIsSelected((prev) => !prev);
    }
  }, []);

  return (
    <div className={styles.wrapper} onClick={() => handleSelected(check)}>
      {isSelected ? <CheckboxSvg /> : <BlankboxSvg />}
      {children}
    </div>
  );
}

export default CheckList;
