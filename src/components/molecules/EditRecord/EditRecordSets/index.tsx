import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/EditRecord/EditRecordSets/EditRecordSets.module.scss';
import { Dispatch, SetStateAction } from 'react';

interface EditRecordSetsProp {
  countSets?: number;
  deleteSets?: () => void;
  isDisabled?: boolean;
  setKg: Dispatch<SetStateAction<number>>;
  setCount: Dispatch<SetStateAction<number>>;
}

function EditRecordSets({
  countSets,
  deleteSets,
  isDisabled,
  setKg,
  setCount,
}: EditRecordSetsProp) {
  const handleKgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setKg(newValue);
  };

  const handleSetsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setCount(newValue);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.setText}>
        <Text>{countSets}세트</Text>
      </div>
      <div className={styles.inputWrapper}>
        <div className={styles.input}>
          <input onChange={handleKgChange} />
          <p className={styles.inputText}>kg</p>
        </div>
        <div className={styles.input}>
          <input onChange={handleSetsChange} />
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
