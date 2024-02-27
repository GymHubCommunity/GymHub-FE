import styles from '@/components/molecules/ExerciseRoutine/Snapshot/Snapshot.module.scss';
import UserRoutineArticle from '@/components/molecules/UserRoutineArticle';
import { postProfile } from '@/constants/MockData';
import { RecordCategory, RecordExerciseProps } from '@/types/records';

interface ToggleProps {
  close: () => void;
  toggle: () => void;
  targetDate: Date;
  data: any;
}

function ExerciseSnapshotRoutine({
  close,
  toggle,
  targetDate,
  data,
}: ToggleProps) {
  return (
    <div className={styles.allWrapper}>
      <div className={styles.wrapper}>
        <UserRoutineArticle
          name={postProfile.name}
          date={targetDate}
          close={close}
          toggle={toggle}
        />
        {data.snapshots?.map((item: RecordExerciseProps, index: number) => (
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
        ))}
      </div>
    </div>
  );
}

export default ExerciseSnapshotRoutine;
