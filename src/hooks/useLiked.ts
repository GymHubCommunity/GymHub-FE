import { useState } from 'react';

// TODO: API 구현되면 수정 필요

function useLiked() {
  const [isLike, setIsLiked] = useState(false);
  const [countLike, setCountLike] = useState(0);

  const handleLike = () => {
    if (isLike === false) setCountLike(countLike + 1);
    if (isLike === true) setCountLike(countLike - 1);
    setIsLiked((prev) => !prev);
  };

  return { isLike, countLike, handleLike };
}

export default useLiked;
