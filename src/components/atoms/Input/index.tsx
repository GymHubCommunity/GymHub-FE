import CommentSubmitSvg from '@/assets/icons/CommentSubmitSvg';
import SearchSvg from '@/assets/icons/SearchSvg';
import styles from '@/components/atoms/Input/Input.module.scss';
import useInput from '@/hooks/useInput';
import { Dispatch, SetStateAction } from 'react';

interface InputProp {
  postType: string;
  type: 'hashTag' | 'workOut' | 'comment' | 'addExercise';
  setPostType: Dispatch<SetStateAction<string>>;
}

function Input({ postType, type, setPostType }: InputProp) {
  const {
    changeButtonColor,
    content,
    isDisabled,
    searchHashTag,
    submitColor,
    submitComment,
    handleUpdateComment,
  } = useInput({ setPostType });

  return (
    <div className={styles.wrapper}>
      {type === 'hashTag' && (
        <>
          <input
            className={styles.input}
            onChange={searchHashTag}
            placeholder="해시태그 검색..."
          />
        </>
      )}
      {type === 'workOut' && (
        <input
          className={styles.input}
          onChange={() => {}}
          placeholder="운동 부위, 기구 등 검색..."
        />
      )}
      {type === 'comment' && (
        <input
          className={styles.commentInput}
          value={content}
          onChange={changeButtonColor}
          placeholder="어떤 운동 얘기를 할까요?"
        />
      )}
      {type === 'addExercise' && (
        <input
          className={styles.input}
          onChange={() => {}}
          placeholder="추가하려는 운동을 입력해주세요."
        />
      )}
      {type !== 'comment' ? (
        <SearchSvg />
      ) : (
        <button
          type="submit"
          className={styles.commentSubmit}
          onClick={() =>
            postType === 'post' ? submitComment() : handleUpdateComment()
          }
          disabled={isDisabled}
        >
          <CommentSubmitSvg color={submitColor} />
        </button>
      )}
    </div>
  );
}

export default Input;
