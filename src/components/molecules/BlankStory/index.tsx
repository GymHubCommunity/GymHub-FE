import styles from '@/components/molecules/BlankStory/BlankStory.module.scss';

function BlankStory() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>오늘 아무도 운동을 하지 않았어요!</p>
      <p className={styles.boldText}>#오운완 으로 운동을 인증해보세요.</p>
    </div>
  );
}

export default BlankStory;
