import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/Reaction/Reaction.module.scss';

function Reaction() {
  return (
    <div className={styles.wrapper}>
      {/* TODO: 좋아요, 댓글, 날짜 추후 변경 */}
      <div>좋아요</div>
      <div className={styles.comment}>댓글</div>
      <Text post="postingTime">3시간전 게시</Text>
    </div>
  );
}

export default Reaction;
