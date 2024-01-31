import styles from '@/components/atoms/LabelInput/LabelInput.module.scss';
import useLabelInput from '@/hooks/useLabelInput';

function LabelInput() {
  const { value, labels, handleChangeInput, handleEnter, deleteLabel } =
    useLabelInput();

  return (
    <div>
      <input
        className={styles.labelInput}
        value={value}
        onChange={handleChangeInput}
        onKeyDown={handleEnter}
      />
      {labels.map((value) => (
        <div key={value.id} className={styles.labelContainer}>
          <div className={styles.label}>{value.value}</div>
          <button
            className={styles.deleteButton}
            onClick={() => deleteLabel(value.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default LabelInput;
