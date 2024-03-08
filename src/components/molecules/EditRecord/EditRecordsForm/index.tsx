import LineSvg from '@/assets/icons/LineSvg';
import AddSetButton from '@/components/atoms/Button/AddSetButton';
import EditRecordName from '@/components/molecules/EditRecord/EditRecordName';
import styles from '@/components/molecules/EditRecord/EditRecordsForm/EditRecordsForm.module.scss';
import { useCallback, useState } from 'react';
import EditRecordSets from '../EditRecordSets';

interface EditRecordsFormProps {
  id: number;
  name: string;
}

function EditRecordsForm({ id, name }: EditRecordsFormProps) {
  const [recordSet, setRecordSet] = useState({
    [name]: [{ id: 0, set: 1, kg: 0, count: 0 }],
  });

  const addSets = useCallback(() => {
    setRecordSet((prevRecord) => ({
      ...prevRecord,
      [name]: [
        ...prevRecord[name],
        {
          id: prevRecord[name].length,
          set: prevRecord[name].length + 1,
          kg: 0,
          count: 0,
        },
      ],
    }));
  }, [name]);

  const delSets = useCallback(
    (filterIndex: number) => {
      setRecordSet((prevRecord) => ({
        ...prevRecord,
        [name]: prevRecord[name].filter((val, index) => index !== filterIndex),
      }));
    },
    [name],
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.inWrapper}>
        <EditRecordName id={id} name={name} />
        <LineSvg />
        {recordSet[name].map((val, index) => (
          <EditRecordSets
            key={val.id}
            countSets={index + 1}
            deleteSets={() => delSets(index)}
            machineName={name}
          />
        ))}
        <AddSetButton onClick={addSets} />
      </div>
    </div>
  );
}

export default EditRecordsForm;
