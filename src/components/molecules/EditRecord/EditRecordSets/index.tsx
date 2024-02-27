import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/EditRecord/EditRecordSets/EditRecordSets.module.scss';
import { useState } from 'react';

interface EditRecordSetsProp {
  id: number;
  name: string;
  countSets?: number;
  deleteSets?: () => void;
  isDisabled?: boolean;
  onChangeKg: (newValue: string) => void; // kg 변경 시 호출할 콜백 함수
  onChangeSets: (newValue: string) => void; // sets 변경 시 호출할 콜백 함수
}

function EditRecordSets({
  countSets,
  deleteSets,
  isDisabled,
  onChangeKg,
  onChangeSets,
}: EditRecordSetsProp) {
  const [kg, setKg] = useState('0');
  const [sets, setSets] = useState('0');

  const handleKgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setKg(newValue);
    onChangeKg(newValue);
  };

  const handleSetsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSets(newValue);
    onChangeSets(newValue);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.setText}>
        <Text>{countSets}세트</Text>
      </div>
      <div className={styles.inputWrapper}>
        <div className={styles.input}>
          <input value={kg} onChange={handleKgChange} />
          <p className={styles.inputText}>kg</p>
        </div>
        <div className={styles.input}>
          <input value={sets} onChange={handleSetsChange} />
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
