import { instance } from '@/apis/index';
import { GetPost } from '@/types/GetPost';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

function useGetPost() {
  const getPost = async (pageParam?: number) => {
    const response = await instance.get<GetPost>(
      `/posts?page=${pageParam}&size=5`,
    );
    return response.data;
  };

  const { data, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPost(),
  });

  if (isError) toast.error('글 목록을 불러오는데 실패했어요.');

  return { data };
}

export default useGetPost;
