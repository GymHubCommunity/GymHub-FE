import BackIconSvg from '@/assets/icons/BackIconSvg';
import PlusSvg from '@/assets/icons/PlusSvg';
import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/EditRecord/EditRecordsHeader/EditRecordsHeader.module.scss';
import { atom, useAtom } from 'jotai';
import EditRecordsForm from '../EditRecordsForm';

export const exerciseAtom = atom<any[]>([]);

function EditRecordsHeader() {
  const [exercise, setExercise] = useAtom(exerciseAtom);

  const addExercise = () => {
    setExercise(exercise.concat(<EditRecordsForm name="바벨 스쿼트" />));
  };

  return (
    <div className={styles.wrapper}>
      <BackIconSvg />
      <Text records="modalTitle">운동 기록 수정</Text>
      <button onClick={addExercise} className={styles.button}>
        <PlusSvg color="#70767E" />
      </button>
    </div>
  );
}

export default EditRecordsHeader;
