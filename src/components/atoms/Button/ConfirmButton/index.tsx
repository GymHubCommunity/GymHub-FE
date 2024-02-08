import styles from '@/components/atoms/Button/ConfirmButton/ConfirmButton.module.scss';

interface PostConfirmButtonProps {
  title: string;
  onClick: () => void;
}

function PostConfirmButton({ title, onClick }: PostConfirmButtonProps) {
  return (
    <button onClick={onClick} className={styles.wrapper}>
      {title}
    </button>
  );
}

export default PostConfirmButton;
