import { instance } from '@/apis/index';
import getPostId from '@/utils/GetPostId';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

interface postCommentProp {
  content: string;
}

function usePostComment() {
  const { postId } = getPostId();
  const queryClient = useQueryClient();

  const { mutate: postComment } = useMutation({
    mutationFn: ({ content }: postCommentProp) => {
      return instance.post(`/posts/${postId}/comments`, { content });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
      queryClient.invalidateQueries({ queryKey: ['postDetail', postId] });
    },
    onError: () => {
      return toast.error('댓글 등록에 실패했습니다.');
    },
  });

  return { postComment };
}

export default usePostComment;
