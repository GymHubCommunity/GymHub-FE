import { TrashCanSvg } from '@/assets/icons/TrashCanSvg';
import LikeButton from '@/components/atoms/Button/LikeButton';
import ProfileImg from '@/components/atoms/ProfileImg';
import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/Comment/Comment.module.scss';
import useLiked from '@/hooks/useLiked';
import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CommentProps {
  id: number;
  imgUrl: string;
  userName: string;
  date: string;
  comment: string;
}

function Comment({ id, imgUrl, userName, date, comment }: CommentProps) {
  const { isLike, countLike, handleLike } = useLiked();

  const itemX = useMotionValue(0);
  const [isDeleteShow, setIsDeleteShow] = useState(false);
  const deleteAnimateState = isDeleteShow ? 'appear' : 'disappear';

  useEffect(() => {
    itemX.on('change', (v) => {
      const isOverThreshold = v < -64 / 2;

      setIsDeleteShow(isOverThreshold);
    });
  }, [itemX]);

  return (
    <motion.div
      key={id}
      className={styles.wrapper}
      style={{
        x: itemX,
      }}
      drag="x"
      dragConstraints={{
        left: -75,
        right: 0,
      }}
      dragElastic={0.1}
      whileTap={{ cursor: 'grabbing' }}
    >
      <ProfileImg imgUrl={imgUrl} size={34} />
      <div className={styles.inWrapper}>
        <div className={styles.userWrapper}>
          <Text post="commentUserName">{userName}</Text>
          <Text post="commentDate">{date}</Text>
        </div>
        <Text post="comment">{comment}</Text>
      </div>
      <motion.button
        className={styles.deleteButton}
        initial="disappear"
        animate={deleteAnimateState}
        variants={{
          appear: { opacity: 1 },
          disappear: { opacity: 0 },
        }}
      >
        <motion.p
          className={styles.deleteLabel}
          variants={{
            appear: { scale: 1 },
            disappear: { scale: 0 },
          }}
        >
          <TrashCanSvg />
        </motion.p>
      </motion.button>
      <LikeButton
        type="comment"
        isLike={isLike}
        handleLike={handleLike}
        count={countLike}
      />
    </motion.div>
  );
}

export default Comment;
