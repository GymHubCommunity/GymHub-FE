import { submitPostProps, updatePost } from '@/apis/post';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

interface UpdatePostProp {
  id: string;
  param: submitPostProps;
}

function useUpdatePost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['updatePost'],
    mutationFn: ({ id, param }: UpdatePostProp) => updatePost(id, param),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['postDetail'] });
      toast.success('게시글 수정 완료');
    },
    onError(error) {
      console.error('error : ', error);
      toast.error('게시글을 수정 하지 못했습니다.');
    },
  });
}

export default useUpdatePost;
