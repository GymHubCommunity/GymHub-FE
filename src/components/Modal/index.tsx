import styles from '@/components/Modal/Modal.module.scss';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isShow: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
  content: string;
}

function Modal({ isShow, setIsShow, content }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeModal = (e: MouseEvent) => {
      if (
        isShow &&
        modalRef.current &&
        modalRef.current.contains(e.target as Node)
      ) {
        setIsShow(false);
      }
    };
    document.addEventListener('mousedown', closeModal);

    return () => {
      document.removeEventListener('mousedown', closeModal);
    };
  }, [isShow]);

  return createPortal(
    <>
      <div className={styles.background} ref={modalRef} />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <button
            className={styles.closeButton}
            onClick={() => setIsShow(false)}
          />
        </div>
        <p className={styles.title}>{content}</p>
      </div>
    </>,
    document.body,
  );
}

export default Modal;
