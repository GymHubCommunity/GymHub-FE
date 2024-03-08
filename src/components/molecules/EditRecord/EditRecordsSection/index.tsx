import { postRecords } from '@/apis/recordController';
import ConfirmButton from '@/components/atoms/Button/ConfirmButton';
import commonStyles from '@/components/organisms/Common.module.scss';
import BackButtonHeader from '@/components/organisms/Header/BackButtonHeader';
import useSelectedPart from '@/hooks/useSelectedPart';
import { atom, useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import EditRecordsForm from '../EditRecordsForm';

export const exerciseAtom = atom<any[]>([]);

function EditRecordsSection() {
  const router = useRouter();

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

  const goToRecordsPage = () => {
    router.push('/records');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const tracks: {
      machineName: string;
      sets: { weight: number; repeatCnt: number }[];
    }[] = [];

    formData.forEach((value, key) => {
      const [machineName, property] = key.split('.');

      let track = tracks.find((track) => track.machineName === machineName);
      if (!track) {
        track = { machineName, sets: [] };
        tracks.push(track);
      }

      if (property === 'weight') {
        track.sets.push({ weight: Number(value), repeatCnt: 0 });
      } else if (property === 'repeatCnt' && track.sets.length > 0) {
        const lastIndex = track.sets.length - 1;
        track.sets[lastIndex].repeatCnt = Number(value);
      }
    });

    const submitData = new FormData();
    submitData.append('tracks', tracks as any);

    postRecords({ tracks: tracks });
  };

  return (
    <>
      <div className={commonStyles.wrapper}>
        <BackButtonHeader pageName="운동 기록하기" onClick={addExercise} />
      </div>
      <form onSubmit={handleSubmit}>
        {exercise}
        <ConfirmButton
          type="submit"
          title="운동기록하기"
          disabled={false}
          onClick={goToRecordsPage}
        />
      </form>
    </>
  );
}

export default EditRecordsSection;
