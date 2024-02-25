import { ReactNode } from 'react';
import styles from '@/components/atoms/PartLabel/PartLabel.module.scss';

interface PartLabelProp {
  isSelected?: boolean;
  onClick: () => void;
  children: ReactNode;
}

function PartLabel({ isSelected, onClick, children }: PartLabelProp) {
  return (
    <div
      className={isSelected ? styles.selected : styles.default}
      onClick={onClick}
      role="button"
    >
      {children}
    </div>
  );
}

export default PartLabel;
