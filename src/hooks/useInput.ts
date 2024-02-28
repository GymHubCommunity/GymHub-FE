import usePostComment from '@/apis/Query/Comment/usePostComment';
import useUpdateComment from '@/apis/Query/Comment/useUpdateComment';
import {
  commentAtom,
  commentIdAtom,
  commentSubmitType,
  searchValueAtom,
} from '@/hooks/atoms';
import useSearchFilter from '@/hooks/useSearchFilter';

import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { ChangeEvent, useRef, useState } from 'react';
import toast from 'react-hot-toast';

function useInput() {
  const [content, setContent] = useAtom(commentAtom);
  const [isDisabled, setIsDisabled] = useState(true);
  const [submitColor, setSubmitColor] = useState('#4B4D54');
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [searchValue, setSearchValue] = useAtom(searchValueAtom);
  const commentId = useAtomValue(commentIdAtom);
  const setCommentSubmitType = useSetAtom(commentSubmitType);

  const { postComment } = usePostComment();
  const { updateComment } = useUpdateComment();

  const { searchHashTag } = useSearchFilter({
    timer,
    setSearchValue,
  });

  const changeButtonColor = (e: ChangeEvent<HTMLInputElement>) => {
    const comment = e.target.value;
    if (comment.length > 0) {
      setIsDisabled(false);
      setSubmitColor('#C7F640');
    }
    if (comment.length === 0) {
      setIsDisabled(true);
      setSubmitColor('#4B4D54');
    }
    setContent(comment);
  };

  const submitComment = () => {
    if (content.length === 0) return toast.error('댓글을 입력하세요');
    postComment({ content });
    setContent('');
    setSubmitColor('#4B4D54');
  };

  const handleUpdateComment = () => {
    updateComment({ content, commentId });
    setCommentSubmitType('post');
    setContent('');
    setSubmitColor('#4B4D54');
  };

  return {
    searchHashTag,
    content,
    changeButtonColor,
    submitComment,
    isDisabled,
    submitColor,
    handleUpdateComment,
  };
}

export default useInput;
