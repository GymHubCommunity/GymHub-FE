'use client';
import ToggleMenu from '@/components/atoms/Button/ToggleMenu';
import styles from '@/components/molecules/DailyRecord/DailyRecord.module.scss';
import Text from '@/components/atoms/Text';
import useSelectedDate from '@/hooks/useSelectedDate';
import DateFormat from '@/utils/DateFormat';
import { exerciseRecords } from '@/constants/MockData';
import ToggleItems from '@/components/atoms/Button/ToggleMenu/ToggleItems';
import useToggleMenu from '@/hooks/useToggleMenu';
import { getRecordSnapshots } from '@/apis/recordController';
import { useEffect } from 'react';

function DailyRecord() {
  const { selectedDate } = useSelectedDate();
  const targetDate = selectedDate !== null ? selectedDate : new Date();
  const { year, month, day } = DateFormat(targetDate);
  const { isOpen, toggleMenu, closeMenu } = useToggleMenu();

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Text records="name">
          {year}.{month}.{day} 운동 기록
        </Text>
        {/* <ToggleMenu type="records" /> */}
        <ToggleMenu close={closeMenu} toggle={toggleMenu} />

        <div className={styles.modalWrapper}>
          {isOpen && <ToggleItems type="records" />}
        </div>
      </div>

      <div className={styles.part}>
        <Text records="name">운동 부위</Text>
        <Text records="value">{exerciseRecords.part}</Text>
      </div>
      <div className={styles.contentWrapper}>
        {Object.keys(exerciseRecords.tracks).map((trackName) => (
          <div key={trackName} className={styles.content}>
            <Text records="name">{trackName}</Text>
            <Text records="value">{exerciseRecords.tracks[trackName]}</Text>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyRecord;
