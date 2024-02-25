'use client';

import { getRecordSnapshots } from '@/apis/recordController';
import styles from '@/components/molecules/ExerciseRoutine/ExerciseRoutine.module.scss';
import UserRoutineArticle from '@/components/molecules/UserRoutineArticle';
import useSelectedDate from '@/hooks/useSelectedDate';
import { RecordItemProps } from '@/types/record';
import { useEffect, useState } from 'react';

// TODO: API 연동시, 데이터 변경 필요
function ExerciseRoutine() {
  const { selectedDate } = useSelectedDate();
  const targetDate = selectedDate !== null ? selectedDate : new Date();
  const [snapShots, setSnapShots] = useState<RecordItemProps[]>([]);

  const getSnapshots = async () => {
    try {
      const response = await getRecordSnapshots(1);
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
          {item.tracks.map((trackItem) => (
            <div key={index} className={styles.inWrapper}>
              <p className={styles.exerciseArea}>{trackItem.bodyPart} 운동</p>
              <div className={styles.exerciseWrapper}>
                <ul className={styles.exerciseInWrapper}>
                  <li key={index} className={styles.exercise}>
                    {trackItem.machineName}
                  </li>
                </ul>
                <div className={styles.setWrapper}>
                  {trackItem.weight}kg x {trackItem.repeat}회 x {trackItem.set}
                  세트
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ExerciseRoutine;
