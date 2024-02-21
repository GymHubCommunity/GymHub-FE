import styles from '@/components/atoms/Button/PrimaryButton/PrimaryButton.module.scss';

function PrimaryButton({ isActive, children }) {
  return (
    <button className={styles.wrapper} disabled={!isActive}>
      {children}
    </button>
  );
}

export default PrimaryButton;
