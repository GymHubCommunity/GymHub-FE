import Name from '@/components/atoms/Name';
import PostContent from '@/components/atoms/PostContent';
import ProfileImg from '@/components/atoms/ProfileImg';
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
        <ProfileImg imgUrl={comment.imgUrl} size={38} />
        <div className={styles.user}>
          <Name name={comment.userName} size="md" />
          <PostContent type="default" content={comment.comment} />
        </div>
      </div>
      <div>좋아요</div>
    </div>
  );
}

export default Comment;
