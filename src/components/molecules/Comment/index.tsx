import ActionButton from '@/components/atoms/Button/ActionButton';
import LikeButton from '@/components/atoms/Button/LikeButton';
import ProfileImg from '@/components/atoms/ProfileImg';
import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/Comment/Comment.module.scss';
import DragComment from '@/components/molecules/Comment/DragComment';
import useComment from '@/hooks/useComment';
import { atom } from 'jotai';
import { Dispatch, SetStateAction } from 'react';

export const commentIdAtom = atom(0);

interface CommentProps {
  id: number;
  imgUrl: string;
  userName: string;
  date: string;
  comment: string;
  setPostType: Dispatch<SetStateAction<string>>;
}

function Comment({
  id,
  imgUrl,
  userName,
  date,
  comment,
  setPostType,
}: CommentProps) {
  const {
    itemX,
    formatDate,
    animateState,
    isLike,
    handleLike,
    countLike,
    handleUpdateComment,
    deleteModal,
  } = useComment({ id, comment, date, setPostType });

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
        action={deleteModal}
        animateState={animateState}
      />
    </DragComment>
  );
}

export default Comment;
