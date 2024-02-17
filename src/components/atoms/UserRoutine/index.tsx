import DumbbellSvg from '@/assets/icons/DumbbellSvg';
import styles from '@/components/atoms/UserRoutine/UserRoutine.module.scss';
import DateFormat from '@/utils/DateFormat';
import { usePathname } from 'next/navigation';

export interface UserRoutineProps {
  name: string;
  date: Date;
}

function UserRoutine({ name, date }: UserRoutineProps) {
  const pathName = usePathname();
  const { year, month, day } = DateFormat(date);
  return (
    <div className={styles.wrapper}>
      <DumbbellSvg type="default" />
      {pathName === '/' ? (
        <span className={styles.content}>{name}의 운동 루틴</span>
      ) : (
        <span className={styles.content}>
          {year}.{month}.{day} 운동 기록
        </span>
      )}
    </div>
  );
}

export default UserRoutine;
