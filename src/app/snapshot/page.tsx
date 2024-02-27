'use client';

import { getRecordSnapshots } from '@/apis/recordController';
import Loading from '@/components/atoms/Loading';
import BackButtonHeader from '@/components/organisms/Header/BackButtonHeader';
import useModalInfo from '@/hooks/useModalInfo';
import useToggleMenu from '@/hooks/useToggleMenu';
import { useQuery } from '@tanstack/react-query';
import styles from '@/components/organisms/Records/Records.module.scss';
import Modal from '@/components/organisms/Modal';
import { RecordExerciseProps } from '@/types/records';
import ToggleItems from '@/components/atoms/Button/ToggleMenu/ToggleItems';
import useSelectedDate from '@/hooks/useSelectedDate';
import ExerciseSnapshotRoutine from '@/components/molecules/ExerciseRoutine/Snapshot';

//* 즐겨찾기 운동을 볼 수 있는 페이지입니다
//TODO: 기능 구현 및 디자인 수정해야 함
function SnapShot() {
  const { isOpen, closeMenu, toggleMenu } = useToggleMenu();
  const { isShow, closeModal } = useModalInfo();
  const { selectedDate } = useSelectedDate();
  const targetDate = selectedDate !== null ? selectedDate : new Date();

  const { data, isLoading } = useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => {
      const response = await getRecordSnapshots(30);
      return response.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <BackButtonHeader pageName="즐겨찾기" />
      <ExerciseSnapshotRoutine
        data={data}
        close={closeMenu}
        toggle={toggleMenu}
        targetDate={targetDate}
      />

      <div className={styles.modalWrapper}>
        {isOpen &&
          data?.snapshots?.map((item: RecordExerciseProps, index: number) => (
            <ToggleItems
              type="snapShotBpx"
              recordId={item.recordId}
              key={index}
            />
          ))}
      </div>

      {isShow && (
        <Modal type="snapShotBpx" isShow={isShow} closeModal={closeModal} />
      )}
    </>
  );
}

export default SnapShot;
