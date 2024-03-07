import LineSvg from '@/assets/icons/LineSvg';
import AddSetButton from '@/components/atoms/Button/AddSetButton';
import EditRecordName from '@/components/molecules/EditRecord/EditRecordName';
import styles from '@/components/molecules/EditRecord/EditRecordsForm/EditRecordsForm.module.scss';
import { useCallback, useEffect, useState } from 'react';
import EditRecordSets from '../EditRecordSets';

interface EditRecordsFormProps {
  id: number;
  name: string;
}

function EditRecordsForm({ id, name }: EditRecordsFormProps) {
  const [kg, setKg] = useState(0);
  const [count, setCount] = useState(0);

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
  }, []);

  const delSets = useCallback((filterIndex: number) => {
    setRecordSet((prevRecord) => ({
      ...prevRecord,
      [name]: prevRecord[name].filter((val, index) => index !== filterIndex),
    }));
  }, []);

  useEffect(() => {
    setRecordSet((prevRecord) => ({
      ...prevRecord,
      [name]: prevRecord[name].map((item) => ({
        ...item,
        kg: kg,
        count: count,
      })),
    }));
  }, [kg, count]);

  // const handleSubmit = () => {
  //   setRecordSets((prevRecordSets) => [...prevRecordSets, recordSet]);

  //   console.log('recordSet:', recordSets);
  // };

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
            setKg={setKg}
            setCount={setCount}
          />
        ))}
        <AddSetButton onClick={addSets} />
      </div>
    </div>
  );
}

export default EditRecordsForm;
