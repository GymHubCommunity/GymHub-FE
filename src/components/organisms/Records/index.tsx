import FloatingButton from '@/components/atoms/Button/FloatingButton';
import ToggleMenu from '@/components/atoms/Button/ToggleMenu';
import ToggleItems from '@/components/atoms/Button/ToggleMenu/ToggleItems';
import DateInput from '@/components/atoms/Input/DateInput';
import Text from '@/components/atoms/Text';
import ExerciseRoutine from '@/components/molecules/ExerciseRoutine';
import Modal from '@/components/organisms/Modal';
import styles from '@/components/organisms/Records/Records.module.scss';
import useModalInfo from '@/hooks/useModalInfo';
import useToggleMenu from '@/hooks/useToggleMenu';

//TODO: recordId: post 루틴해서 나온 id값, snapShotId: post 스냅샷해서 나온 id 값
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

      <div className={styles.modalWrapper}>
        {isOpen && <ToggleItems type="records" recordId={17} snapShotId={18} />}
      </div>

      <FloatingButton type={'addExercise'} />
      {isShow && <Modal isShow={isShow} closeModal={closeModal} />}
    </div>
  );
}

export default Records;
