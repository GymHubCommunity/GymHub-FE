import { instance } from '@/apis/index';
import { useInfiniteQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

interface getPostProp {
  pageParam?: number;
}

export interface WriterInfoProps {
  writerId: number;
  nickname: string;
  email: string;
  profileUrl: string;
}

export interface getPostItems {
  postId: number;
  writerInfo: WriterInfoProps;
  content: string;
  imageUrl: string;
  commentCount: number;
  registeredAt: string;
}

export interface getPostProps {
  posts: getPostItems[];
  hasNext?: boolean;
}

function useGetPostwithScroll() {
  const getPost = async ({ pageParam }: getPostProp) => {
    const response = await instance.get<getPostProps>(
      `/posts?page=${pageParam}&size=5`,
    );
    return response.data;
  };

  const { data, isError, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
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

  if (isError) toast.error('글 목록 불러오기가 실패했어요.');

  return { data, isLoading, fetchNextPage, hasNextPage };
}

export default useGetPostwithScroll;
