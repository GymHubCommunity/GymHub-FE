import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/ModalArticle/ModalArticle.module.scss';
import { ChangeEvent } from 'react';

interface ModalArticleProps {
  first: string;
  second: string;
  firstEvent: (param?: string) => void;
  secondEvent: (e?: ChangeEvent<HTMLInputElement>) => void;
  closeModal: () => void;
}

function ModalArticle({
  first,
  second,
  firstEvent,
  secondEvent,
  closeModal,
}: ModalArticleProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inWrapper}>
        <button className={styles.button} onClick={() => firstEvent()}>
          <Text modal="modalText">{first}</Text>
        </button>
        <button className={styles.borderButton} onClick={() => secondEvent()}>
          <Text modal="modalText">{second}</Text>
        </button>
        <button className={styles.borderButton} onClick={closeModal}>
          <Text modal="modalCancel">취소</Text>
        </button>
      </div>
    </div>
  );
}

export default ModalArticle;
