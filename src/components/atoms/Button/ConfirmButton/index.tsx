import styles from '@/components/atoms/Button/ConfirmButton/ConfirmButton.module.scss';

interface ConfirmButtonProps {
  title: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  isActive?: boolean;
}

function ConfirmButton({
  title,
  onClick,
  type = 'button',
  disabled,
  isActive,
}: ConfirmButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={styles.wrapper}
      disabled={disabled ?? !isActive}
    >
      {title}
    </button>
  );
}

export default ConfirmButton;
