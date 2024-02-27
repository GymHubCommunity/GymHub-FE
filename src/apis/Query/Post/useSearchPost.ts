import { searchPost } from '@/apis/post';
import { useInfiniteQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

function useSearchPost(keyword: string) {
  const { data, isError, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['postsSearch', keyword],
    queryFn: ({ pageParam }) => searchPost({ pageParam, keyword }),
    initialPageParam: 0,
    select: (data) => ({
      pages: data?.pages.flatMap((page) => page.posts) || [],
      pageParams: data.pageParams,
      totalPostCount: data?.pages[0]?.totalPostCount || 0,
    }),
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage.hasNext) {
        return undefined;
      }
      return pages.length;
    },
  });

  if (isError) toast.error('게시글 검색을 실패했어요.');

  return { data, fetchNextPage, hasNextPage };
}

export default useSearchPost;
