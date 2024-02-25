import { commentIdAtom } from '@/components/molecules/Comment';
import useLiked from '@/hooks/useLiked';
import timeAgo from '@/utils/TimeAgo';

import { useMotionValue } from 'framer-motion';
import { useSetAtom } from 'jotai';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { commentAtom } from './useInput';
import useModalInfo from './useModalInfo';

interface useCommentProp {
  id: number;
  comment: string;
  date: string;
  setPostType: Dispatch<SetStateAction<string>>;
}

function useComment({ id, comment, setPostType, date }: useCommentProp) {
  const itemX = useMotionValue(0);
  const [isActionShow, setIsActionShow] = useState(false);
  const animateState = isActionShow ? 'appear' : 'disappear';

  const setCommentId = useSetAtom(commentIdAtom);
  const setUpdateComment = useSetAtom(commentAtom);

  const { isLike, countLike, handleLike } = useLiked();

  const formatDate = timeAgo(date);

  setCommentId(id);

  const { showModal: deleteModal } = useModalInfo();

  const handleUpdateComment = () => {
    itemX.set(0);
    setPostType('update');
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
