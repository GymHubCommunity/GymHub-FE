import ProfileImg from '@/components/atoms/ProfileImg';
import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/Comment/Comment.module.scss';
import { usePathname } from 'next/navigation';

interface CommentProps {
  type: 'default' | 'allView';
  comment: {
    id: number;
    imgUrl: string;
    userName: string;
    comment: string;
  }[];
}

function Comment({ comment }: CommentProps) {
  const pathName = usePathname();
  if (pathName === '/') {
    return (
      <div key={comment[0].id} className={styles.user}>
        <ProfileImg imgUrl={comment[0].imgUrl} size={34} />
        <div className={styles.userComment}>
          <Text post="commentUserName">{comment[0].userName}</Text>
          <Text post="comment">{comment[0].comment}</Text>
        </div>
        <div>좋아요</div>
      </div>
    );
  } else {
    return (
      <>
        {comment.map((val) => (
          <div key={val.id} className={styles.user}>
            <ProfileImg imgUrl={val.imgUrl} size={34} />
            <div className={styles.userComment}>
              <Text post="commentUserName">{val.userName}</Text>
              <Text post="comment">{val.comment}</Text>
            </div>
            <div>좋아요</div>
          </div>
        ))}
      </>
    );
  }
}

export default Comment;
