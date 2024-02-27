import LineSvg from '@/assets/icons/LineSvg';
import AddSetButton from '@/components/atoms/Button/AddSetButton';
import ConfirmButton from '@/components/atoms/Button/ConfirmButton';
import EditRecordName from '@/components/molecules/EditRecord/EditRecordName';
import EditRecordSets from '@/components/molecules/EditRecord/EditRecordSets';
import styles from '@/components/molecules/EditRecord/EditRecordsForm/EditRecordsForm.module.scss';
import { useState } from 'react';

interface EditRecordsFormProps {
  id: number;
  name: string;
}

function EditRecordsForm({ id, name }: EditRecordsFormProps) {
  const [isDisabled, setDisabled] = useState(false);
  const [countSets, setCountSets] = useState(1);
  const [kg, setKg] = useState('0');
  const [sets, setSets] = useState('0');

  const handleKgChange = (newValue: string) => {
    setKg(newValue);
  };

  const handleSetsChange = (newValue: string) => {
    setSets(newValue);
  };

  const [additionalSet, setAdditionalSet] = useState<any[]>([
    <EditRecordSets
      key={0}
      id={id}
      name={name}
      countSets={countSets}
      onChangeKg={handleKgChange}
      onChangeSets={handleSetsChange}
    />,
  ]);

  const addSets = () => {
    setDisabled(false);
    setCountSets((prev) => prev + 1);
    setAdditionalSet(
      additionalSet.concat(
        <EditRecordSets
          id={id}
          name={name}
          key={Number(countSets)}
          countSets={countSets + 1}
          deleteSets={() => deleteSets(countSets)}
          isDisabled={isDisabled}
          onChangeKg={handleKgChange}
          onChangeSets={handleSetsChange}
        />,
      ),
    );
  };

  // TODO: 중간 세트 삭제시, 안됨..!
  const deleteSets = (countSets?: number) => {
    setAdditionalSet((prevSets) => {
      const sets = [...prevSets];
      return sets.filter((val, index) => index !== countSets);
    });

    if (countSets === 0) {
      setDisabled(true);
    }
    setCountSets((prev) => prev - 1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inWrapper}>
        <EditRecordName id={id} name={name} />
        <LineSvg />
        {additionalSet}
        <AddSetButton onClick={addSets} />
      </div>
      <ConfirmButton
        type={'submit'}
        title={'운동 기록하기'}
        disabled={false}
        onClick={() => console.log('흠')}
      />
    </div>
  );
}

export default EditRecordsForm;
