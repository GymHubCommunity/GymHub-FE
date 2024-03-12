import FloatingButton from '@/components/atoms/Button/FloatingButton';
import ToggleItems from '@/components/atoms/Button/ToggleMenu/ToggleItems';
import DateInput from '@/components/atoms/Input/DateInput';
import Loading from '@/components/atoms/Loading';
import ExerciseRoutine from '@/components/molecules/ExerciseRoutine';
import RecordsHeader from '@/components/molecules/RecordsHeader';
import Modal from '@/components/organisms/Modal';
import styles from '@/components/organisms/Records/Records.module.scss';
import useRecords from '@/hooks/useRecords';
import { RecordExerciseProps } from '@/types/records';

function Records() {
  const {
    closeMenu,
    closeModal,
    data,
    day,
    isLoading,
    isOpen,
    isShow,
    targetDate,
    toggleMenu,
  } = useRecords();

  if (isLoading) return <Loading />;

  return (
    <div className={styles.wrapper}>
      <RecordsHeader />
      <DateInput />
      <ExerciseRoutine
        close={closeMenu}
        toggle={toggleMenu}
        targetDate={targetDate}
        data={data}
        day={day}
      />
      <div className={styles.floatingButton}>
        <FloatingButton type={'addExercise'} />
      </div>
      {isOpen &&
        data.results[data.results?.length - Number(day)]?.exerciseRecords?.map(
          (item: RecordExerciseProps, index: number) => (
            <ToggleItems type="records" recordId={item.recordId} key={index} />
          ),
        )}
      {isShow && (
        <Modal type="recordsDel" isShow={isShow} closeModal={closeModal} />
      )}
    </div>
  );
}

export default Records;
