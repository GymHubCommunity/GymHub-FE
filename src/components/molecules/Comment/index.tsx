import ProfileImg from '@/components/atoms/ProfileImg';
import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/Comment/Comment.module.scss';

interface CommentProps {
  comment: {
    imgUrl: string;
    userName: string;
    comment: string;
  };
}

function Comment({ comment }: CommentProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inWrapper}>
        <ProfileImg imgUrl={comment.imgUrl} size={34} />
        <div className={styles.user}>
          <Text post="commentUserName">{comment.userName}</Text>
          <Text post="comment">{comment.comment}</Text>
        </div>
      </div>
      <div>좋아요</div>
    </div>
  );
}

export default Comment;
