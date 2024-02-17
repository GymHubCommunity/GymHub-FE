import styles from '@/components/atoms/Button/ToggleButton/ToggleButton.module.scss';
import useToggleButton from '@/hooks/useToggleButton';

function ToggleButton() {
  const { isSelected, handlePrivate } = useToggleButton();
  return (
    <label className={styles.label}>
      <p className={styles.content}>{isSelected ? '공개' : '비공개'}</p>
      <input
        type="checkbox"
        className={styles.input}
        checked={isSelected}
        onChange={handlePrivate}
      />
      <div className={styles.toggleSlider} />
    </label>
  );
}

export default ToggleButton;
