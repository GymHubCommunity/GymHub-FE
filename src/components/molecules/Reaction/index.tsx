import styles from '@/components/molecules/Reaction/Reaction.module.scss';

function Reaction() {
  return (
    <div className={styles.wrapper}>
      {/* TODO: 좋아요, 댓글, 날짜 추후 변경 */}
      <div className={styles.reaction}>
        <div>좋아요</div>
        <div>댓글</div>
      </div>
      <div>2024.02.03</div>
    </div>
  );
}

export default Reaction;
