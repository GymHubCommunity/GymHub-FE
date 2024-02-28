import { deletePost } from '@/apis/post';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

interface DeletePostProp {
  id: number;
}

function useDeletePost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['deletePost'],
    mutationFn: ({ id }: DeletePostProp) => deletePost(id),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      queryClient.invalidateQueries({ queryKey: ['myPosts'] });
      toast('게시물 삭제 성공', { icon: '❌' });
    },
    onError(error) {
      console.error('error : ', error);
      toast.error('게시글을 삭제 하지 못했습니다.');
    },
  });
}

export default useDeletePost;
