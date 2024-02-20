import { instance } from '@/apis/index';
import { useInfiniteQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

interface getPostProps {
  pageParam: number;
}

function useGetPost() {
  const getPost = async ({ pageParam }: getPostProps) => {
    const response = await instance.get(`/posts?page=${pageParam}&size=${6}`);
    return response.data;
  };

  const { data, isError, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: ({ pageParam }) => getPost({ pageParam }),
    initialPageParam: 0,
    select: (data) => ({
      pages: data?.pages.flatMap((page) => page.posts) || [],
      pageParams: data.pageParams,
    }),
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage.hasNext) {
        return undefined;
      }
      return pages.length;
    },
  });

  if (isError) toast.error('글 목록 불러오기 실패');

  return { data, fetchNextPage, hasNextPage };
}

export default useGetPost;
