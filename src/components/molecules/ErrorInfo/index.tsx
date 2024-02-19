import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/ErrorInfo/ErrorInfo.module.scss';
import { ReactNode } from 'react';

interface ErrorInfoProps {
  text: string;
  children: ReactNode;
}

function ErrorInfo({ children, text }: ErrorInfoProps) {
  return (
    <div className={styles.wrapper}>
      {children}
      <Text errorMessage="errorMessage">{text}</Text>
    </div>
  );
}

export default ErrorInfo;
