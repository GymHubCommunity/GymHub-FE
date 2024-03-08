import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/EditRecord/EditRecordSets/EditRecordSets.module.scss';

interface EditRecordSetsProp {
  countSets?: number;
  deleteSets?: () => void;
  isDisabled?: boolean;
  machineName: string;
}

function EditRecordSets({
  countSets,
  deleteSets,
  isDisabled,
  machineName,
}: EditRecordSetsProp) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.setText}>
        <Text>{countSets}세트</Text>
      </div>
      <div className={styles.inputWrapper}>
        <div className={styles.input}>
          <input
            className={styles.inputNumber}
            type="number"
            name={`${machineName}.weight`}
            max={1000}
            min={1}
          />
          <p className={styles.inputText}>kg</p>
        </div>
        <div className={styles.input}>
          <input
            className={styles.inputNumber}
            type="number"
            name={`${machineName}.repeatCnt`}
            max={1000}
            min={1}
          />
          <p className={styles.inputText}>회</p>
        </div>
        <button
          type="button"
          className={styles.deleteButton}
          onClick={deleteSets}
          disabled={isDisabled}
        >
          세트 삭제
        </button>
      </div>
    </div>
  );
}

export default EditRecordSets;
