import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { deletePost } from '@/apis/post';

interface useDeletePostProp {
  Id?: number;
}

function useDeletePost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['deletePost'],
    mutationFn: ({ Id }: useDeletePostProp) => deletePost(Id),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
    onError(error) {
      console.log('error : ', error);
      toast.error('게시글을 삭제 하지 못했습니다.');
    },
  });
}

export default useDeletePost;
