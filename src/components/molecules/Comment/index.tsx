import useDeleteComment from '@/apis/Query/Comment/useDeleteComment';
import DeleteButton from '@/components/atoms/Button/DeleteButton';
import LikeButton from '@/components/atoms/Button/LikeButton';
import ProfileImg from '@/components/atoms/ProfileImg';
import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/Comment/Comment.module.scss';
import DragComment from '@/components/molecules/Comment/DragComment';
import useComment from '@/hooks/useComment';
import getPostId from '@/utils/GetPostId';

interface CommentProps {
  id: number;
  imgUrl: string;
  userName: string;
  date: string;
  comment: string;
}

function Comment({ id, imgUrl, userName, date, comment }: CommentProps) {
  const { postId } = getPostId();
  const {
    itemX,
    formatDate,
    deleteAnimateState,
    isLike,
    handleLike,
    countLike,
  } = useComment({ date });
  const { deleteComment } = useDeleteComment({ postId, commentId: id });
  return (
    <DragComment id={id} itemX={itemX}>
      <ProfileImg imgUrl={imgUrl} size={34} />
      <div className={styles.inWrapper}>
        <div className={styles.userWrapper}>
          <Text post="commentUserName">{userName}</Text>
          <Text post="commentDate">{formatDate}</Text>
        </div>
        <Text post="comment">{comment}</Text>
      </div>
      <DeleteButton
        deleteComment={deleteComment}
        deleteAnimateState={deleteAnimateState}
      />
      <LikeButton
        type="comment"
        isLike={isLike}
        handleLike={handleLike}
        count={countLike}
      />
    </DragComment>
  );
}

export default Comment;
