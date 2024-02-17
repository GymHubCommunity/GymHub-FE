import LikeSvg from '@/assets/icons/LikeSvg';
import LikeButton from '@/components/atoms/Button/LikeButton';
import ProfileImg from '@/components/atoms/ProfileImg';
import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/Comment/Comment.module.scss';
import useLiked from '@/hooks/useLiked';
import { usePathname } from 'next/navigation';

interface CommentProps {
  comment: {
    id: number;
    imgUrl: string;
    userName: string;
    date: string;
    comment: string;
  }[];
}

function Comment({ comment }: CommentProps) {
  const { isLike, countLike, handleLike } = useLiked();
  const pathName = usePathname();

  if (pathName === '/') {
    return (
      <div key={comment[0].id} className={styles.wrapper}>
        <ProfileImg imgUrl={comment[0].imgUrl} size={34} />
        <div className={styles.inWrapper}>
          <div className={styles.userWrapper}>
            <Text post="commentUserName">{comment[0].userName}</Text>
            <Text post="commentDate">{comment[0].date}</Text>
          </div>
          <Text post="comment">{comment[0].comment}</Text>
        </div>
        <LikeButton
          type="comment"
          isLike={isLike}
          handleLike={handleLike}
          count={countLike}
        />
      </div>
    );
  } else {
    return (
      <>
        {comment.map((val) => (
          <div key={val.id} className={styles.wrapper}>
            <ProfileImg imgUrl={val.imgUrl} size={34} />
            <div className={styles.inWrapper}>
              <div className={styles.userWrapper}>
                <Text post="commentUserName">{val.userName}</Text>
                <Text post="commentDate">{val.date}</Text>
              </div>
              <Text post="comment">{val.comment}</Text>
            </div>
            <button onClick={handleLike}>
              <LikeSvg type={isLike} />
            </button>
          </div>
        ))}
      </>
    );
  }
}

export default Comment;
