import ConfirmButton from '@/components/atoms/Button/ConfirmButton';
import EditRecordsHeader, {
  exerciseAtom,
} from '@/components/molecules/EditRecord/EditRecordsHeader';
import { useAtomValue } from 'jotai';

interface SetInfo {
  weight: string;
  repeatCnt?: string;
}
interface MachineTrack {
  machineName: string;
  sets: SetInfo[];
}

function EditRecordsSection() {
  const exercise = useAtomValue(exerciseAtom);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const tracks: MachineTrack[] = [];

    formData.forEach((value, key) => {
      const [machineName, property] = key.split('.');

      let trackIndex = tracks.findIndex(
        (track) => track.machineName === machineName,
      );

      if (trackIndex === -1) {
        trackIndex = tracks.length;
        tracks.push({
          machineName: machineName,
          sets: [],
        });
      }

      if (property === 'weight') {
        tracks[trackIndex].sets.push({ weight: String(value), repeatCnt: '' });
      }

      if (property === 'repeatCnt') {
        const setIndex = tracks[trackIndex].sets.length - 1;
        if (setIndex >= 0) {
          tracks[trackIndex].sets[setIndex].repeatCnt = String(value);
        }
      }
    });

    console.log('result : ', tracks);
  };

  return (
    <>
      <EditRecordsHeader />
      <form onSubmit={handleSubmit}>
        {exercise}
        <ConfirmButton type="submit" title="운동기록하기" disabled={false} />
      </form>
    </>
  );
}

export default EditRecordsSection;
