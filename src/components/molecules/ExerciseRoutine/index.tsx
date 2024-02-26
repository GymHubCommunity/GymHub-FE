import { instance } from '@/apis';
import Loading from '@/components/atoms/Loading';
import styles from '@/components/molecules/ExerciseRoutine/ExerciseRoutine.module.scss';
import UserRoutineArticle from '@/components/molecules/UserRoutineArticle';
import { postProfile } from '@/constants/MockData';
import useSelectedDate from '@/hooks/useSelectedDate';
import {
  RecordCategory,
  RecordExerciseProps,
  RecordTracksProps,
  RecordsProps,
} from '@/types/records';
import DateFormat from '@/utils/DateFormat';
import { useQuery } from '@tanstack/react-query';

function ExerciseRoutine() {
  const { selectedDate } = useSelectedDate();
  const targetDate = selectedDate !== null ? selectedDate : new Date();

  const { year, month, day, fullDate } = DateFormat(selectedDate as Date);

  console.log(fullDate);
  const { data, isLoading } = useQuery({
    queryKey: ['getRecordsByDay'],
    queryFn: async () => {
      const response = await instance.get(
        `/records?year=${year}&month=${month}`,
      );

      return response.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={styles.wrapper}>
      <UserRoutineArticle name={postProfile.name} date={targetDate} />
      {data.results[data.results.length - Number(day)]?.exerciseRecords?.map(
        (item: RecordExerciseProps, index: number) => (
          <div key={index} className={styles.inWrapper}>
            {item.tracksCategorizedBodyPart?.map(
              (tracks: RecordCategory, index) => (
                <div key={index}>
                  <span className={styles.exerciseArea}>{tracks.bodyPart}</span>
                  {tracks.tracks?.map((track, index) => (
                    <div key={index} className={styles.itemWrapper}>
                      <div className={styles.exerciseWrapper}>
                        <ul className={styles.exerciseInWrapper}>
                          <li className={styles.exercise}>
                            {track.machineName}
                          </li>
                        </ul>

                        <div className={styles.setWrapper}>
                          <span>{track.weight}kg</span> x
                          <span> {track.repeat}회</span> x
                          <span> {track.set}세트</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ),
            )}
          </div>
        ),
      )}
    </div>
  );
}

export default ExerciseRoutine;
