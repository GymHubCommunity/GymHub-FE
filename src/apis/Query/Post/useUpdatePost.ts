import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { submitPostProps, updatePost } from '@/apis/post';

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
    },
    onError(error) {
      console.error('error : ', error);
      toast.error('게시글을 수정 하지 못했습니다.');
    },
  });
}

export default useUpdatePost;
