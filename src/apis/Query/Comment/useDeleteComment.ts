import { instance } from '@/apis/index';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

interface useDeleteCommentProps {
  postId: string;
  commentId: number;
}

function useDeleteComment({ postId, commentId }: useDeleteCommentProps) {
  const queryClient = useQueryClient();

  const { mutate: deleteComment } = useMutation({
    mutationFn: () => {
      return instance.delete(`/posts/${postId}/comments/${commentId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
      queryClient.invalidateQueries({ queryKey: ['postDetail', postId] });
    },
    onError: () => {
      return toast.error('댓글 삭제를 실패했습니다.');
    },
  });
  return { deleteComment };
}

export default useDeleteComment;
