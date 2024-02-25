import { commentIdAtom } from '@/components/molecules/Comment';
import useLiked from '@/hooks/useLiked';
import timeAgo from '@/utils/TimeAgo';

import { useMotionValue } from 'framer-motion';
import { useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';

import { commentAtom, commentSubmitType } from '@/hooks/atoms';
import useModalInfo from '@/hooks/useModalInfo';

interface useCommentProp {
  id: number;
  comment: string;
  date: string;
}

function useComment({ id, comment, date }: useCommentProp) {
  const itemX = useMotionValue(0);
  const [isActionShow, setIsActionShow] = useState(false);
  const animateState = isActionShow ? 'appear' : 'disappear';

  const setCommentId = useSetAtom(commentIdAtom);
  const setUpdateComment = useSetAtom(commentAtom);

  const setCommentSubmitType = useSetAtom(commentSubmitType);

  const { isLike, countLike, handleLike } = useLiked();

  const formatDate = timeAgo(date);

  setCommentId(id);

  const { showModal: deleteModal } = useModalInfo();

  const handleUpdateComment = () => {
    itemX.set(0);
    setCommentSubmitType('update');
    setUpdateComment(comment);
    setCommentId(id);
  };

  useEffect(() => {
    itemX.on('change', (v) => {
      const isOverThreshold = v < -64 / 2;
      setIsActionShow(isOverThreshold);
    });
  }, [itemX]);

  return {
    itemX,
    formatDate,
    animateState,
    isLike,
    handleLike,
    countLike,
    deleteModal,
    handleUpdateComment,
  };
}

export default useComment;
