import styles from '@/components/atoms/Button/PrimaryButton/PrimaryButton.module.scss';
import { ReactNode } from 'react';

interface PrimaryButtonProps {
  isActive: boolean;
  children: ReactNode;
}

function PrimaryButton({ isActive, children }: PrimaryButtonProps) {
  return (
    <button className={styles.wrapper} disabled={!isActive}>
      {children}
    </button>
  );
}

export default PrimaryButton;
