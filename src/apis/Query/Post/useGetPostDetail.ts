import { instance } from '@/apis/index';
import useGetPostId from '@/hooks/useGetPostId';
import { GetPostDetailProps } from '@/types/GetPost';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

function useGetPostDetail() {
  const { postId } = useGetPostId();

  const { data, isError, isLoading } = useQuery({
    queryKey: ['postDetail', postId],
    queryFn: async () => {
      const response = await instance.get<GetPostDetailProps>(
        `/posts/${postId}`,
      );
      return response.data;
    },
  });

  if (isError) toast.error('게시글 상세보기 데이터를 가져오지 못했습니다.');
  return { data, isLoading };
}

export default useGetPostDetail;