import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { submitPostProps, submitPost } from '@/apis/post';

interface submitPostProp {
  param: submitPostProps;
}

function useSubmitPost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['updatePost'],
    mutationFn: ({ param }: submitPostProp) => submitPost(param),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
    onError(error) {
      console.log('error : ', error);
      toast.error('게시글을 등록 하지 못했습니다.');
    },
  });
}

export default useSubmitPost;
