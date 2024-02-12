import RoutineSvg from '@/assets/icons/RoutineSvg';
import styles from '@/components/atoms/Button/RoutineButton/RoutineButton.module.scss';

interface RoutineButtonProps {
  onClick: () => void;
}

function RoutineButton({ onClick }: RoutineButtonProps) {
  return (
    <button onClick={onClick} className={styles.wrapper}>
      <RoutineSvg />
      <span className={styles.title}>운동 루틴</span>
    </button>
  );
}

export default RoutineButton;
