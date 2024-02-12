'use client';

import DateInput from '@/components/atoms/Input/DateInput';
import DailyHistory from '@/components/molecules/DailyHistory';
import useToggleMenu from '@/hooks/useToggleMenu';
import styles from '@/app/history/HIstoryPage.module.scss';
import Text from '@/components/atoms/Text';
import AddTrackButton from '@/components/atoms/Button/AddTrackButton';
import Modal from '@/components/organisms/Modal';
import useModalInfo from '@/hooks/useModalInfo';

function HistoryPage() {
  const { isOpen } = useToggleMenu();
  const { isShow, closeModal } = useModalInfo();

  return (
    <div className={styles.wrapper}>
      {isOpen && <div className={styles.blur}></div>}
      <div className={styles.header}>
        <Text>운동 기록</Text>
      </div>
      <DateInput />
      <DailyHistory />
      <AddTrackButton />
      {isShow && <Modal isShow={isShow} closeModal={closeModal} />}
    </div>
  );
}

export default HistoryPage;
