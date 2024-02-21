import DumbbellSvg from '@/assets/icons/DumbbellSvg';
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
      {isOpen && <div className={styles.blur} />}
      <div className={styles.header}>
        <Text className={styles.headerText}>운동 기록</Text>
        <button
          type="button"
          onClick={() => console.log('저장된 운동 가져오기')}
        >
          <DumbbellSvg type={'menu'} size={24} />
        </button>
      </div>
      <DateInput />
      <ExerciseRoutine />
      <FloatingButton type={'addExercise'} />
      {isShow && (
        <Modal type="recordsDel" isShow={isShow} closeModal={closeModal} />
      )}
    </div>
  );
}

export default Records;
