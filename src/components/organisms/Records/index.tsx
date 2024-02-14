import DateInput from '@/components/atoms/Input/DateInput';
import DailyRecord from '@/components/molecules/DailyRecord';
import useToggleMenu from '@/hooks/useToggleMenu';
import styles from '@/components/organisms/Records/Records.module.scss';
import Text from '@/components/atoms/Text';
import AddTrackButton from '@/components/atoms/Button/AddTrackButton';
import Modal from '@/components/organisms/Modal';
import useModalInfo from '@/hooks/useModalInfo';

function Records() {
  const { isOpen } = useToggleMenu();
  const { isShow, closeModal } = useModalInfo();

  return (
    <div className={styles.wrapper}>
      {isOpen && <div className={styles.blur}></div>}
      <div className={styles.header}>
        <Text>운동 기록</Text>
      </div>
      <DateInput />
      <DailyRecord />
      <AddTrackButton />
      {isShow && <Modal isShow={isShow} closeModal={closeModal} />}
    </div>
  );
}

export default Records;
