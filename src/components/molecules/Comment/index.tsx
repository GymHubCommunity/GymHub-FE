import ActionButton from '@/components/atoms/Button/ActionButton';
import LikeButton from '@/components/atoms/Button/LikeButton';
import ProfileImg from '@/components/atoms/ProfileImg';
import DragComment from '@/components/molecules/Comment/DragComment';
import useComment from '@/hooks/useComment';
import CommentProfile from './CommentProfile';

interface CommentProps {
  id: number;
  imgUrl: string;
  userName: string;
  date: string;
  comment: string;
}

function Comment({ id, imgUrl, userName, date, comment }: CommentProps) {
  const {
    itemX,
    formatDate,
    animateState,
    isLike,
    handleLike,
    countLike,
    handleUpdateComment,
    handleDeleteComment,
  } = useComment({ id, comment, date });

  return (
    <DragComment id={id} itemX={itemX}>
      <ProfileImg imgUrl={imgUrl} size={34} />
      <CommentProfile
        userName={userName}
        formatDate={formatDate}
        comment={comment}
      />
      <LikeButton
        type="comment"
        isLike={isLike}
        handleLike={handleLike}
        count={countLike}
      />
      <ActionButton
        type="update"
        action={handleUpdateComment}
        animateState={animateState}
      />
      <ActionButton
        type="delete"
        action={handleDeleteComment}
        animateState={animateState}
      />
    </DragComment>
  );
}

export default Comment;
