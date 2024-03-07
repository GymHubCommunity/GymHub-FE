import BackIconSvg from '@/assets/icons/BackIconSvg';
import PlusSvg from '@/assets/icons/PlusSvg';
import ConfirmButton from '@/components/atoms/Button/ConfirmButton';
import Text from '@/components/atoms/Text';
import EditRecordsForm from '@/components/molecules/EditRecord/EditRecordsForm';
import styles from '@/components/molecules/EditRecord/EditRecordsHeader/EditRecordsHeader.module.scss';
import useSelectedPart from '@/hooks/useSelectedPart';

import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';

export const exerciseAtom = atom<any[]>([]);

function EditRecordsHeader() {
  const { selectedMachines } = useSelectedPart();
  const [exercise, setExercise] = useAtom(exerciseAtom);

  const addExercise = () => {
    setExercise(exercise.concat(<EditRecordsForm id={0} name="" />));
  };

  useEffect(() => {
    setExercise(
      selectedMachines.map((val) =>
        exercise.concat(
          <EditRecordsForm key={val.id} id={val.id} name={val.name} />,
        ),
      ),
    );
    return () => {
      setExercise([]);
    };
  }, []);

  const handleSubmit = () => {
    console.log('recordSet : ', exercise);
  };

  return (
    <div className={styles.wrapper}>
      <BackIconSvg />
      <Text records="modalTitle">운동 기록하기</Text>
      <button onClick={addExercise} className={styles.button}>
        <PlusSvg color="#70767E" />
      </button>
      <ConfirmButton
        type={'submit'}
        title={'운동 기록하기'}
        disabled={false}
        onClick={() => handleSubmit()}
      />
    </div>
  );
}

export default EditRecordsHeader;
