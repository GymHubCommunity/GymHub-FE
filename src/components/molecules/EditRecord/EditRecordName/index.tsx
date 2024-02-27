import BabelSvg from '@/assets/icons/BabelSvg';
import SetNameDeleteSvg from '@/assets/icons/SetNameDeleteSvg';
import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/EditRecord/EditRecordName/EditRecordName.module.scss';
import { exerciseAtom } from '@/components/molecules/EditRecord/EditRecordsHeader';

import { useSetAtom } from 'jotai';

interface EditRecordNameProp {
  id: number;
  name: string;
}

function EditRecordName({ id, name }: EditRecordNameProp) {
  const setExercise = useSetAtom(exerciseAtom);

  const deleteExercise = (id: number) => {
    setExercise((prevExercise) => {
      const exercise = [...prevExercise];
      const newExercise = exercise.filter((val) => val[0].props.id !== id);
      return newExercise;
    });
  };

  return (
    <div className={styles.wrapper}>
      <BabelSvg />
      <div className={styles.nameText}>
        <Text records="trackName">{name}</Text>
      </div>
      <button type="button" onClick={() => deleteExercise(id)}>
        <SetNameDeleteSvg />
      </button>
    </div>
  );
}

export default EditRecordName;
