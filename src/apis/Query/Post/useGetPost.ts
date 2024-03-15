import { instance } from '@/apis/index';
import { GetPost } from '@/types/GetPost';
import { useInfiniteQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { memberIdProp } from '../Follow';

interface getPostProp {
  pageParam: number;
}

function useGetPost({ memberId }: memberIdProp) {
  const getPost = async ({ pageParam }: getPostProp) => {
    const response = await instance.get<GetPost>(
      `/members/${memberId}/posts?page=${pageParam}&size=5`,
    );
    return response.data;
  };

  const { data, isError, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['myPosts', memberId],
    queryFn: ({ pageParam }) => getPost({ pageParam }),
    initialPageParam: -1,
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

  if (isError) toast.error('글 목록을 불러오는데 실패했어요.');

  return { data, fetchNextPage, hasNextPage };
}

export default useGetPost;
