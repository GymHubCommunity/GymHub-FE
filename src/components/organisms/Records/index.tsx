import FloatingButton from '@/components/atoms/Button/FloatingButton';
import DateInput from '@/components/atoms/Input/DateInput';
import Text from '@/components/atoms/Text';
import ExerciseRoutine from '@/components/molecules/ExerciseRoutine';
import Modal from '@/components/organisms/Modal';
import styles from '@/components/organisms/Records/Records.module.scss';
import useModalInfo from '@/hooks/useModalInfo';
import useToggleMenu from '@/hooks/useToggleMenu';

function Records() {
  const { isOpen } = useToggleMenu();
  const { isShow, closeModal } = useModalInfo();

  return (
    <div className={styles.wrapper}>
      {isOpen && <div className={styles.blur}></div>}
      <div className={styles.header}>
        <Text>운동 기록</Text>
      </div>
      <DateInput />
      <ExerciseRoutine />
      <FloatingButton type={'addExercise'} />
      {isShow && <Modal isShow={isShow} closeModal={closeModal} />}
    </div>
  );
}

export default Records;
