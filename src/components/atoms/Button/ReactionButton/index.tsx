import CommentSvg from '@/assets/icons/CommentSvg';
import LikeButton from '@/components/atoms/Button/LikeButton';
import styles from '@/components/atoms/Button/ReactionButton/ReactionButton.module.scss';

import useLiked from '@/hooks/useLiked';
import Link from 'next/link';

/* TODO: 게시글 상세보기 API 완료시 수정 필요
 *  LikeButton count 수정 필요
 *  commentCount 수정 필요
 */

interface ReactionButtonProps {
  type: 'like' | 'comment';
  postId?: number;
  commentCount?: number;
}

function ReactionButton({ type, postId, commentCount }: ReactionButtonProps) {
  const { isLike, countLike, handleLike } = useLiked();

  return (
    <div className={styles.wrapper}>
      {type === 'like' ? (
        <LikeButton
          type="post"
          isLike={isLike}
          handleLike={handleLike}
          count={countLike}
        />
      ) : (
        <Link href={`/post/${postId}`} className={styles.inWrapper}>
          <CommentSvg />
          <p className={styles.count}>{commentCount}</p>
        </Link>
      )}
    </div>
  );
}

export default ReactionButton;
