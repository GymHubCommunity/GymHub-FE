import { post } from '@/constants/MockData';
import { atom, useAtom } from 'jotai';
import { ChangeEvent, MutableRefObject, useEffect } from 'react';

export const filterValueAtom = atom<string[]>([]);

interface Props {
  timer: MutableRefObject<NodeJS.Timeout | null>;
  searchValue: string;
  setSearchValue: any; // TODO: 타입 추정 안됨
}

function useSearchFilter({ timer, searchValue, setSearchValue }: Props) {
  const [filterValue, setFilterValue] = useAtom(filterValueAtom);

  const searchHashTag = (e: ChangeEvent<HTMLInputElement>) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      let value = e.target.value;
      const blank_pattern = /[\s]/g; // 띄어쓰기 찾는 정규표현식
      if (blank_pattern.test(value)) value = value.replace(/ /g, '');
      setSearchValue(value);
    }, 800);
  };

  // TODO: post부분에 api데이터 넣어주기
  const hashtags = post.postContent
    .match(/#[^\s#]*/g)
    ?.map((val) => val) as RegExpMatchArray;

  useEffect(() => {
    if (searchValue) {
      setFilterValue(
        hashtags
          .map((val) => val.slice(1))
          .filter((val) => val === searchValue.toLocaleLowerCase()),
      );
    }
    if (searchValue.length === 0) {
      setFilterValue([]);
    }
  }, [searchValue]);

  return { searchHashTag };
}

export default useSearchFilter;
