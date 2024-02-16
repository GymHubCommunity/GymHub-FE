import ReactionButton from '@/components/atoms/Button/ReactionButton';
import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/Reaction/Reaction.module.scss';
import { usePathname } from 'next/navigation';

function Reaction() {
  const pathName = usePathname();
  return (
    <div className={styles.wrapper}>
      {/* TODO: 좋아요, 댓글, 날짜 추후 변경 */}
      <div className={styles.inWrapper}>
        <ReactionButton type="like" />
        {pathName === `/` && <ReactionButton type="comment" />}
      </div>
      <Text post="postingTime">3시간전 게시</Text>
    </div>
  );
}

export default Reaction;
