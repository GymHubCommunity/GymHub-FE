import CommentSubmitSvg from '@/assets/icons/CommentSubmitSvg';
import SearchSvg from '@/assets/icons/SearchSvg';
import styles from '@/components/atoms/Input/Input.module.scss';
import { searchValueAtom } from '@/hooks/atoms';
import useSearchFilter from '@/hooks/useSearchFilter';

import { useAtom } from 'jotai';
import { ChangeEvent, useRef, useState } from 'react';

interface InputProp {
  type: 'hashTag' | 'workOut' | 'comment' | 'addExercise';
}

function Input({ type }: InputProp) {
  const [submitColor, setSubmitColor] = useState('#4B4D54');
  const [searchValue, setSearchValue] = useAtom(searchValueAtom);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { searchHashTag } = useSearchFilter({
    timer,
    searchValue,
    setSearchValue,
  });

  const commentSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) setSubmitColor('#C7F640');
    if (e.target.value.length === 0) setSubmitColor('#4B4D54');
  };

  return (
    <div className={styles.wrapper}>
      {type === 'hashTag' && (
        <>
          <input
            className={styles.input}
            onChange={searchHashTag}
            placeholder="해시태그 검색..."
          />
          {/* 아마 삭제 예정? {pathName === '/search' && <SearchButton page="search" />} */}
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
          onChange={commentSubmit}
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
        <button type="submit" className={styles.commentSubmit}>
          <CommentSubmitSvg color={submitColor} />
        </button>
      )}
    </div>
  );
}

export default Input;
