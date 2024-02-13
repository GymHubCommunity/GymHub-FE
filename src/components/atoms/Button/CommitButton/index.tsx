import CommitSvg from '@/assets/icons/CommitSvg';
import styles from '@/components/atoms/Button/CommitButton/CommitButton.module.scss';

interface CommitButtonProps {
  onClick: () => void;
}

function CommitButton({ onClick }: CommitButtonProps) {
  return (
    <button onClick={onClick} className={styles.wrapper}>
      <CommitSvg />
      <span className={styles.title}>운동 커밋</span>
    </button>
  );
}

export default CommitButton;
