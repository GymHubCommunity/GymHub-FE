import { instance } from '@/apis/index';
import { useInfiniteQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

interface getCommentProp {
  pageParam: number;
}

interface useGetCommentProp {
  postId: number;
}

function useGetComment({ postId }: useGetCommentProp) {
  const getComment = async ({ pageParam }: getCommentProp) => {
    const response = await instance.get(
      `/posts/${postId}/comments?page=${pageParam}&size=5`,
    );
    return response.data;
  };

  const {
    data: comment,
    isError,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['comments'],
    queryFn: ({ pageParam }) => getComment({ pageParam }),
    initialPageParam: 0,
    select: (data) => ({
      pages: data?.pages.flatMap((page) => page.comments) || [],
      pageParams: data.pageParams,
    }),
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage.hasNext) {
        return undefined;
      }
      return pages.length;
    },
  });

  if (isError) toast.error('댓글 목록 불러오기가 실패했어요.');

  return { comment, fetchNextPage, hasNextPage };
}

export default useGetComment;
