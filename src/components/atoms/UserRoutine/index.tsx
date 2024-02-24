import DumbbellSvg from '@/assets/icons/DumbbellSvg';
import styles from '@/components/atoms/UserRoutine/UserRoutine.module.scss';
import DateFormat from '@/utils/DateFormat';
import { usePathname } from 'next/navigation';
import { defaultFadeInLeftVariants } from '@/constants/motion';
import { m } from 'framer-motion';

export interface UserRoutineProps {
  name: string;
  date: Date;
}

function UserRoutine({ name, date }: UserRoutineProps) {
  const pathName = usePathname();
  const { year, month, day } = DateFormat(date);
  return (
    <m.div
      variants={defaultFadeInLeftVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={styles.wrapper}
    >
      <DumbbellSvg type="default" />
      {pathName === '/' ? (
        <span className={styles.content}>{name}의 운동 루틴</span>
      ) : (
        <span className={styles.content}>
          {year}.{month}.{day} 운동 기록
        </span>
      )}
    </m.div>
  );
}

export default UserRoutine;
