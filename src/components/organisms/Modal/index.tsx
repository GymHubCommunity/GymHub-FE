import styles from '@/components/organisms/Modal/Modal.module.scss';
import { useEffect } from 'react';
import Text from '@/components/atoms/Text';

interface ModalProps {
  isShow: boolean;
  closeModal: () => void;
}

function Modal({ isShow, closeModal }: ModalProps) {
  useEffect(() => {
    const handleCloseModal = (e: MouseEvent) => {
      closeModal();
    };
    document.addEventListener('mousedown', handleCloseModal);

    return () => {
      document.removeEventListener('mousedown', handleCloseModal);
    };
  }, [isShow]);

  return (
    <>
      {isShow && <div className={styles.blur}></div>}
      <div className={styles.container}>
        <div className={styles.infoWrapper}>
          <Text records="modalTitle">운동 기록 삭제</Text>
          <Text records="modalInfo">
            운동 기록 삭제 시에는 복구할 수 없습니다.{'\n'}운동 기록을
            삭제할까요?
          </Text>
        </div>
        <div className={styles.buttonWrapper}>
          <button className={styles.deleteButton} onClick={() => closeModal()}>
            삭제
          </button>
          <button className={styles.closeButton} onClick={() => closeModal()}>
            취소
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
