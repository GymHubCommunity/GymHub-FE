import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/Comment/CommentProfile/CommentProfile.module.scss';

interface CommentProfileProps {
  userName: string;
  formatDate: string;
  comment: string;
}

function CommentProfile({
  userName,
  formatDate,
  comment,
}: CommentProfileProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.userWrapper}>
        <Text post="commentUserName">{userName}</Text>
        <Text post="commentDate">{formatDate}</Text>
      </div>
      <Text post="comment">{comment}</Text>
    </div>
  );
}

export default CommentProfile;
