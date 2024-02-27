import { instance } from '@/apis/index';
import useGetPostId from '@/hooks/useGetPostId';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

interface useUpdateCommentProps {
  commentId: number;
  content: string;
}

function useUpdateComment() {
  const { postId } = useGetPostId();
  const queryClient = useQueryClient();

  const { mutate: updateComment } = useMutation({
    mutationFn: ({ commentId, content }: useUpdateCommentProps) => {
      return instance.put(`/posts/${postId}/comments/${commentId}`, {
        content,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
      queryClient.invalidateQueries({ queryKey: ['postDetail', postId] });
    },
    onError: () => {
      return toast.error('댓글 수정을 실패했습니다.');
    },
  });
  return { updateComment };
}

export default useUpdateComment;
