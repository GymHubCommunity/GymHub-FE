import Button from '@/components/atoms/Button';
import styles from '@/components/molecules/TwinButton/TwinButton.module.scss';

function TwinButton() {
  return (
    <div className={styles.wrapper}>
      <Button
        onClick={() => {}}
        content="프로필 편집"
        size="md"
        color="primary"
      />
      <Button
        onClick={() => {}}
        content="운동 일지"
        size="md"
        color="primary2"
      />
    </div>
  );
}

export default TwinButton;
