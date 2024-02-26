import BabelSvg from '@/assets/icons/BabelSvg';
import SetNameDeleteSvg from '@/assets/icons/SetNameDeleteSvg';
import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/EditRecord/EditRecordName/EditRecordName.module.scss';
import { exerciseAtom } from '@/components/molecules/EditRecord/EditRecordsHeader';

import { useSetAtom } from 'jotai';

interface EditRecordNameProp {
  name: string;
}

function EditRecordName({ name }: EditRecordNameProp) {
  const setExercise = useSetAtom(exerciseAtom);

  const deleteExercise = (index: number) => {
    setExercise((prevExercise) => {
      const newExercise = [...prevExercise];
      newExercise.splice(index, 1); // 인덱스에 해당하는 요소 제거
      return newExercise;
    });
  };
  return (
    <div className={styles.wrapper}>
      <BabelSvg />
      <div className={styles.nameText}>
        <Text records="trackName">{name}</Text>
      </div>
      {/* TODO: deleteExercise(index): index 값 한번 알아봐야함 이게 맞는지 잘 모름*/}
      <button type="button" onClick={() => deleteExercise(0)}>
        <SetNameDeleteSvg />
      </button>
    </div>
  );
}

export default EditRecordName;
