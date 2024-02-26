import useLiked from '@/hooks/useLiked';
import timeAgo from '@/utils/TimeAgo';

import { useMotionValue } from 'framer-motion';
import { useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';

import { commentAtom, commentIdAtom, commentSubmitType } from '@/hooks/atoms';
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

  const { showModal: deleteModal } = useModalInfo();

  const { isLike, countLike, handleLike } = useLiked();

  const formatDate = timeAgo(date);

  const handleUpdateComment = () => {
    itemX.set(0);
    setCommentSubmitType('update');
    setUpdateComment(comment);
    setCommentId(id);
  };

  const handleDeleteComment = () => {
    setCommentId(id);
    deleteModal();
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
    handleDeleteComment,
    handleUpdateComment,
  };
}

export default useComment;
