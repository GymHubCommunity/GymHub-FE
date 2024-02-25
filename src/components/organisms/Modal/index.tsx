import Text from '@/components/atoms/Text';
import ModalArticle from '@/components/molecules/ModalArticle';
import styles from '@/components/organisms/Modal/Modal.module.scss';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

interface ModalProps {
  type: 'imgUpdate' | 'records' | 'recordsDel';
  isShow: boolean;
  closeModal: () => void;
}

function Modal({ type, isShow, closeModal }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleCloseModal = (e: MouseEvent) => {
      if (isShow && modalRef.current?.contains(e.target as Node)) {
        closeModal();
      }
    };
    document.addEventListener('mousedown', handleCloseModal);

    return () => {
      document.removeEventListener('mousedown', handleCloseModal);
    };
  }, [isShow]);

  return (
    <>
      {isShow && <div ref={modalRef} className={styles.blur} />}
      {type === 'imgUpdate' && (
        <ModalArticle
          first={'사진 변경하기'}
          second={'기본 이미지로 변경하기'}
          firstEvent={() => {}}
          secondEvent={() => {}}
          closeModal={closeModal}
        />
      )}
      {type === 'records' && (
        <ModalArticle
          first={'운동 추가하기'}
          second={'저장된 운동 가져오기'}
          firstEvent={() => router.push('/records/add')}
          secondEvent={() => {}}
          closeModal={closeModal}
        />
      )}
      {type === 'recordsDel' && (
        <div className={styles.wrapper}>
          <div className={styles.infoWrapper}>
            <Text records="modalTitle">운동 기록 삭제</Text>
            <Text records="modalInfo">
              운동 기록 삭제 시에는 복구할 수 없습니다.{'\n'}운동 기록을
              삭제할까요?
            </Text>
          </div>
          <div className={styles.buttonWrapper}>
            <button
              className={styles.deleteButton}
              onClick={() => closeModal()}
            >
              삭제
            </button>
            <button className={styles.closeButton} onClick={() => closeModal()}>
              취소
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
