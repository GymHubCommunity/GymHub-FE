import styles from '@/components/atoms/SearchBar/SearchBar.module.scss';
import { SearchItems } from '@/constants/SearchItems';
import { atom, useSetAtom } from 'jotai';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

// 임시 타입
interface Props {
  id: number;
  item: string;
}

export const filterValueAtom = atom<Props[]>([]);

/**
 * SearchItem(임시): 데이터 값을 넣어주면 된다.
 */
function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const setFilterValue = useSetAtom(filterValueAtom);

  const searchResult = (e: ChangeEvent<HTMLInputElement>) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      setSearchValue(e.target.value);
    }, 1000);
  };

  useEffect(() => {
    if (searchValue) {
      setFilterValue(
        SearchItems.filter((val) =>
          val.item
            .toLocaleLowerCase()
            .includes(searchValue.toLocaleLowerCase()),
        ),
      );
    }
    if (searchValue.length === 0) {
      setFilterValue([]);
    }
  }, [searchValue]);

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        onChange={searchResult}
        placeholder="검색어를 입력해주세요"
      />
    </div>
  );
}

export default SearchBar;
