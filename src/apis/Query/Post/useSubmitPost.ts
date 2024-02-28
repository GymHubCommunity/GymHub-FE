import { submitPost, submitPostProps } from '@/apis/post';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

interface SubmitPostProp {
  param: submitPostProps;
}

function useSubmitPost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['updatePost'],
    mutationFn: ({ param }: SubmitPostProp) => submitPost(param),
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      toast.success('게시글 등록 완료');
    },
    onError(error) {
      console.log('error : ', error);
      toast.error('게시글을 등록 하지 못했습니다.');
    },
  });
}

export default useSubmitPost;
