import ReactionButton from '@/components/atoms/Button/ReactionButton';
import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/Reaction/Reaction.module.scss';
import TimeAgo from '@/utils/TimeAgo';

import { usePathname } from 'next/navigation';

function Reaction({ registeredAt }) {
  const pathName = usePathname();
  const time = TimeAgo.timeAgo(registeredAt);

  return (
    <div className={styles.wrapper}>
      {/* TODO: 좋아요, 댓글, 날짜 추후 변경 */}
      <div className={styles.inWrapper}>
        <ReactionButton type="like" />
        {pathName === `/` && <ReactionButton type="comment" />}
      </div>
      <Text post="postingTime">{time}</Text>
    </div>
  );
}

export default Reaction;
