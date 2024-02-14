import styles from '@/components/atoms/Button/AddTrackButton/AddTrackButton.module.scss';
import Text from '@/components/atoms/Text';

function AddTrackButton() {
  // @TODO onclick 이벤트 추가
  return (
    <button type="button" className={styles.wrapper}>
      <Text button="addButton">운동 추가하기</Text>
    </button>
  );
}

export default AddTrackButton;
