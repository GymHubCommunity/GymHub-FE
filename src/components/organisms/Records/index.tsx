import { instance } from '@/apis';
import DumbbellSvg from '@/assets/icons/DumbbellSvg';
import FloatingButton from '@/components/atoms/Button/FloatingButton';
import ToggleItems from '@/components/atoms/Button/ToggleMenu/ToggleItems';
import DateInput from '@/components/atoms/Input/DateInput';
import Loading from '@/components/atoms/Loading';
import Text from '@/components/atoms/Text';
import ExerciseRoutine from '@/components/molecules/ExerciseRoutine';
import Modal from '@/components/organisms/Modal';
import styles from '@/components/organisms/Records/Records.module.scss';
import useModalInfo from '@/hooks/useModalInfo';
import useSelectedDate from '@/hooks/useSelectedDate';
import useToggleMenu from '@/hooks/useToggleMenu';
import { RecordExerciseProps } from '@/types/records';
import DateFormat from '@/utils/DateFormat';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

function Records() {
  const { isOpen, closeMenu, toggleMenu } = useToggleMenu();
  const { isShow, closeModal } = useModalInfo();
  const { selectedDate } = useSelectedDate();
  const targetDate = selectedDate !== null ? selectedDate : new Date();

  const { year, month, day } = DateFormat(selectedDate as Date);

  const { data, isLoading } = useQuery({
    queryKey: ['getRecordsByDay', year + month + day],
    queryFn: async () => {
      const response = await instance.get(
        `/records?year=${year}&month=${month}`,
      );
      return response.data;
    },
  });

  if (isLoading) return <Loading />;

  return (
    <div className={styles.wrapper}>
      {isOpen && <div className={styles.blur} />}
      <div className={styles.header}>
        <Text className={styles.headerText}>운동 기록</Text>
        <Link href="/snapshot">
          <DumbbellSvg type={'menu'} size={24} />
        </Link>
      </div>
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
