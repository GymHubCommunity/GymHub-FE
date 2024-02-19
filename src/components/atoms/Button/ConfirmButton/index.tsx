import styles from '@/components/atoms/Button/ConfirmButton/ConfirmButton.module.scss';

interface ConfirmButtonProps {
  title: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

function ConfirmButton({
  title,
  onClick,
  type = 'button',
  disabled,
}: ConfirmButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={styles.wrapper}
      disabled={disabled}
    >
      {title}
    </button>
  );
}

export default ConfirmButton;
