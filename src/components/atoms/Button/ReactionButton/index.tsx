import CommentSvg from '@/assets/icons/CommentSvg';
import commonStyles from '@/components/atoms/Button/CommonStyle.module.scss';
import styles from '@/components/atoms/Button/ReactionButton/ReactionButton.module.scss';
import { commentCountAtom } from '@/components/organisms/MainSection';
import useLiked from '@/hooks/useLiked';
import { useAtomValue } from 'jotai';
import Link from 'next/link';
import LikeButton from '../LikeButton';

/* TODO: 게시글 상세보기 API 완료시 수정 필요
 *  LikeButton count 수정 필요
 *  commentCount 수정 필요
 */
const id = 32;

interface ReactionButtonProp {
  type: 'like' | 'comment';
}

function ReactionButton({ type }: ReactionButtonProp) {
  const { isLike, countLike, handleLike } = useLiked();
  const commentCount = useAtomValue(commentCountAtom);
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
        <Link href={'/post/${id}'} className={styles.inWrapper}>
          <CommentSvg />
          <p className={commonStyles.count}>{commentCount}</p>
        </Link>
      )}
    </div>
  );
}

export default ReactionButton;
