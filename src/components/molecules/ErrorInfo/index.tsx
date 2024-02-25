import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/ErrorInfo/ErrorInfo.module.scss';
import { ReactNode } from 'react';

interface ErrorInfoProps {
  text: string;
  line?: string;
  nextLine?: string;
  children: ReactNode;
}

function ErrorInfo({ text, line, nextLine, children }: ErrorInfoProps) {
  return (
    <div className={styles.wrapper}>
      {children}
      <Text errorMessage="errorMessage">
        {text}
        <p className={styles.lineWrapper}>{line}</p>
        <p> {nextLine}</p>
      </Text>
    </div>
  );
}

export default ErrorInfo;
