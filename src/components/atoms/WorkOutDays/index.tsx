import styles from '@/components/atoms/WorkOutDays/WorkOutDays.module.scss';

interface WorkOutDayProps {
  date: string;
}

function WorkOutDays({ date }: WorkOutDayProps) {
  return <p className={styles.workOutDays}>{date}일째 운동중</p>;
}

export default WorkOutDays;
