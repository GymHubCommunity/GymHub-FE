import useGetComment from '@/apis/Query/Comment/useGetComment';
import { GetPostDetailProps } from '@/types/GetPost';
import { useQueryClient } from '@tanstack/react-query';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface usePostSectionProp {
  postId: number;
}

function usePostSection({ postId }: usePostSectionProp) {
  const { ref, inView } = useInView();
  const { comment, hasNextPage, fetchNextPage } = useGetComment({ postId });

  const queryClient = useQueryClient();
  const commentData = queryClient.getQueryData<GetPostDetailProps>([
    'postDetail',
    String(postId),
  ]);
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);
  return { ref, comment, commentData };
}

export default usePostSection;
