import DumbbellSvg from '@/assets/icons/DumbbellSvg';
import styles from '@/components/atoms/UserRoutine/UserRoutine.module.scss';

export interface nameProp {
  name: string;
}

function UserRoutine({ name }: nameProp) {
  return (
    <div className={styles.wrapper}>
      <DumbbellSvg />
      <span className={styles.content}>{name}의 운동 루틴</span>
    </div>
  );
}

export default UserRoutine;
