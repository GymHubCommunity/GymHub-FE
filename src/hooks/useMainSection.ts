import useGetPost from '@/apis/Query/useGetPost';
import { comment } from '@/constants/MockData';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { commentCountAtom } from './atoms';

function useMainSection() {
  const setCommentCount = useSetAtom(commentCountAtom);
  const { ref, inView } = useInView();

  const { data, fetchNextPage, hasNextPage } = useGetPost();

  useEffect(() => {
    setCommentCount(comment.length);
  }, []);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return { data, ref };
}

export default useMainSection;
