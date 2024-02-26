'use client';

import { getRecordSnapshots } from '@/apis/recordController';
import styles from '@/components/molecules/ExerciseRoutine/ExerciseRoutine.module.scss';
import UserRoutineArticle from '@/components/molecules/UserRoutineArticle';
import useSelectedDate from '@/hooks/useSelectedDate';
import { RecordItemProps } from '@/types/record';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { exerciseAtom } from '../EditRecord/EditRecordsHeader';

//TODO: user 이름 넣기 (UserRoutineArticle에)
function ExerciseRoutine() {
  const { selectedDate } = useSelectedDate();
  const targetDate = selectedDate !== null ? selectedDate : new Date();
  const [snapShots, setSnapShots] = useState<RecordItemProps[]>([]);
  const [exercise, setExercise] = useAtom(exerciseAtom);

  const getSnapshots = async () => {
    try {
      const response = await getRecordSnapshots(20);
      setExercise(response.data.snapshots);
      setSnapShots(response.data.snapshots);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSnapshots();
  }, []);

  return (
    <div className={styles.wrapper}>
      <UserRoutineArticle name="스리" date={targetDate} />

      {snapShots.map((item, index) => (
        <div key={index}>
          {item.tracksCategorizedBodyPart.map((bodyPartItem) => (
            <div key={index} className={styles.inWrapper}>
              <p className={styles.exerciseArea}>
                {bodyPartItem.bodyPart} 운동
              </p>
              <div className={styles.exerciseWrapper}>
                {bodyPartItem.tracks.map((trackItem) => (
                  <>
                    <ul className={styles.exerciseInWrapper}>
                      <li key={index} className={styles.exercise}>
                        {trackItem.machineName}
                      </li>
                    </ul>
                    <div className={styles.setWrapper}>
                      {trackItem.weight}kg x {trackItem.repeat}회 x{' '}
                      {trackItem.set}세트
                    </div>
                  </>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ExerciseRoutine;
