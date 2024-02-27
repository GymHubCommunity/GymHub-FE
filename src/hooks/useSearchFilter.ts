import { WriterInfoProps } from '@/types/GetPost';
import { atom, useSetAtom } from 'jotai';
import { ChangeEvent, MutableRefObject } from 'react';

interface filterValueProps {
  postId: number;
  writerInfo: WriterInfoProps;
  content: string;
  imageUrl: string | Array<string> | null;
  commentCount: number;
  registeredAt: string;
}

export const filterValueAtom = atom<filterValueProps[]>([]);
export const keywordValueAtom = atom('');

interface useSearchFilterProps {
  timer: MutableRefObject<NodeJS.Timeout | null>;
  searchValue: string;
  setSearchValue: any; //*: 타입 추정 안됨
}

function useSearchFilter({
  timer,
  searchValue,
  setSearchValue,
}: useSearchFilterProps) {
  // const setFilterValue = useSetAtom(filterValueAtom);
  const setKeyword = useSetAtom(keywordValueAtom);

  const searchHashTag = (e: ChangeEvent<HTMLInputElement>) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      let value = e.target.value;
      const blank_pattern = /[\s]/g; // 띄어쓰기 찾는 정규표현식
      if (blank_pattern.test(value)) value = value.replace(/ /g, '');
      setSearchValue(value);
      setKeyword(value);
    }, 800);
  };

  return { searchHashTag };
}

export default useSearchFilter;
