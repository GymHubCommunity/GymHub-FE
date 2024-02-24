import useLiked from '@/hooks/useLiked';
import timeAgo from '@/utils/TimeAgo';

import { useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

interface useCommentProp {
  date: string;
}

function useComment({ date }: useCommentProp) {
  const itemX = useMotionValue(0);
  const { isLike, countLike, handleLike } = useLiked();
  const [isDeleteShow, setIsDeleteShow] = useState(false);

  const deleteAnimateState = isDeleteShow ? 'appear' : 'disappear';
  const formatDate = timeAgo(date);

  useEffect(() => {
    itemX.on('change', (v) => {
      const isOverThreshold = v < -64 / 2;

      setIsDeleteShow(isOverThreshold);
    });
  }, [itemX]);

  return {
    itemX,
    formatDate,
    deleteAnimateState,
    isLike,
    handleLike,
    countLike,
  };
}

export default useComment;
