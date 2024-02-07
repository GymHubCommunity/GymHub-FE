import CommitButton from '@/components/atoms/Button/CommitButton';
import PictureButton from '@/components/atoms/Button/PictureButton';
import RoutineButton from '@/components/atoms/Button/RoutineButton';
import styles from '@/components/molecules/Post/AttachButtons/AttachButtons.module.scss';
function AttachButtons() {
  return (
    <div className={styles.wrapper}>
      <PictureButton onClick={() => console.log('test')} />
      <RoutineButton onClick={() => console.log('test22')} />
      <CommitButton onClick={() => console.log('test33')} />
    </div>
  );
}

export default AttachButtons;
