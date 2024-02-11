import ToggleMenu from '@/components/atoms/Button/ToggleMenu';
import styles from '@/components/molecules/DailyHistory/DailyHistory.module.scss';
import Text from '@/components/atoms/Text';
import useSelectedDate from '@/hooks/useSelectedDate';
import DateFormat from '@/utils/DateFormat';
import { exerciseHistory } from '@/constants/MockData';

function DailyHistory() {
  const { selectedDate } = useSelectedDate();
  const targetDate = selectedDate !== null ? selectedDate : new Date();
  const { year, month, day } = DateFormat(targetDate);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Text history="name">
          {year}.{month}.{day} 운동 기록
        </Text>
        <ToggleMenu type="history" />
      </div>
      <div className={styles.part}>
        <Text history="name">운동 부위</Text>
        <Text history="value">{exerciseHistory.part}</Text>
      </div>
      <div className={styles.contentWrapper}>
        {Object.keys(exerciseHistory.tracks).map((trackName) => (
          <div key={trackName} className={styles.content}>
            <Text history="name">{trackName}</Text>
            <Text history="value">{exerciseHistory.tracks[trackName]}</Text>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyHistory;
