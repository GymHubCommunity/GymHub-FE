import styles from '@/components/atoms/Button/PrimaryButton/PrimaryButton.module.scss';

function PrimaryButton({ children }) {
  return <button className={styles.wrapper}>{children}</button>;
}

export default PrimaryButton;
