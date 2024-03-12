import useGetRecords from '@/apis/Query/Records/useGetRecords';
import FloatingButton from '@/components/atoms/Button/FloatingButton';
import ToggleItems from '@/components/atoms/Button/ToggleMenu/ToggleItems';
import DateInput from '@/components/atoms/Input/DateInput';
import Loading from '@/components/atoms/Loading';
import ExerciseRoutine from '@/components/molecules/ExerciseRoutine';
import RecordsHeader from '@/components/molecules/RecordsHeader';
import Modal from '@/components/organisms/Modal';
import styles from '@/components/organisms/Records/Records.module.scss';
import useModalInfo from '@/hooks/useModalInfo';
import useSelectedDate from '@/hooks/useSelectedDate';
import useToggleMenu from '@/hooks/useToggleMenu';
import { RecordExerciseProps } from '@/types/records';
import DateFormat from '@/utils/DateFormat';

function Records() {
  const { selectedDate } = useSelectedDate();
  const { isShow, closeModal } = useModalInfo();
  const { isOpen, closeMenu, toggleMenu } = useToggleMenu();
  const targetDate = selectedDate !== null ? selectedDate : new Date();
  const { year, month, day } = DateFormat(selectedDate as Date);

  const { data, isLoading } = useGetRecords(year, month);

  if (isLoading) return <Loading />;

  return (
    <div className={styles.wrapper}>
      {isOpen && <div className={styles.blur} />}
      <RecordsHeader />
      <DateInput />
      <ExerciseRoutine
        close={closeMenu}
        toggle={toggleMenu}
        targetDate={targetDate}
        data={data}
        day={day}
      />
      {isOpen &&
        data.results[data.results?.length - Number(day)]?.exerciseRecords?.map(
          (item: RecordExerciseProps, index: number) => (
            <ToggleItems type="records" recordId={item.recordId} key={index} />
          ),
        )}
      <FloatingButton type={'addExercise'} />
      {isShow && (
        <Modal type="recordsDel" isShow={isShow} closeModal={closeModal} />
      )}
    </div>
  );
}

export default Records;
