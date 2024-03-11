'use client';
import ToggleMenu from '@/components/atoms/Button/ToggleMenu';
import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/DailyRecord/DailyRecord.module.scss';
import { exerciseRecords } from '@/constants/MockData';
import useSelectedDate from '@/hooks/useSelectedDate';
import DateFormat from '@/utils/DateFormat';

function DailyRecord() {
  const { selectedDate } = useSelectedDate();
  const targetDate = selectedDate !== null ? selectedDate : new Date();
  const { year, month, day } = DateFormat(targetDate);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Text records="name">
          {year}.{month}.{day} 운동 기록
        </Text>
        <ToggleMenu type="records" />
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
