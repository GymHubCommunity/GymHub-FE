import styles from '@/components/atoms/Button/PrimaryButton/PrimaryButton.module.scss';
import { ReactNode } from 'react';

interface PrimaryButtonProps {
  onClick: () => void;
  isActive: boolean;
  children: ReactNode;
}

function PrimaryButton({ onClick, isActive, children }: PrimaryButtonProps) {
  return (
    <button className={styles.wrapper} onClick={onClick} disabled={!isActive}>
      {children}
    </button>
  );
}

export default PrimaryButton;
