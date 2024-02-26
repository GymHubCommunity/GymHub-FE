import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/ModalToggle/ModalToggle.module.scss';

interface ModalToggleProp {
  title: string;
  info: string;
  buttonTextL: string;
  buttonTextR: string;
  actionButton: () => void;
  closeModal: () => void;
}

/**
 * @param actionButton: 버튼에 해당하는 함수 넣어주시면 됩니다
 */
function ModalToggle({
  title,
  info,
  buttonTextL,
  buttonTextR,
  actionButton,
  closeModal,
}: ModalToggleProp) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.infoWrapper}>
        <Text records="modalTitle">{title}</Text>
        <Text records="modalInfo">{info}</Text>
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.deleteButton} onClick={actionButton}>
          {buttonTextL}
        </button>
        <button className={styles.closeButton} onClick={closeModal}>
          {buttonTextR}
        </button>
      </div>
    </div>
  );
}

export default ModalToggle;
