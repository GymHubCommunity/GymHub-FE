import useGetPostwithScroll from '@/apis/Query/Post/useGetPostwithScroll';
import { comment } from '@/constants/MockData';
import { commentCountAtom } from '@/hooks/atoms';

import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function useMainSection() {
  const setCommentCount = useSetAtom(commentCountAtom);
  const { ref, inView } = useInView();

  const { data, isLoading, fetchNextPage, hasNextPage } =
    useGetPostwithScroll();

  useEffect(() => {
    setCommentCount(comment.length);
  }, []);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return { data, isLoading, ref };
}

export default useMainSection;
