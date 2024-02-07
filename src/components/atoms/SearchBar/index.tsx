import styles from '@/components/atoms/SearchBar/SearchBar.module.scss';
import useSearchFilter from '@/hooks/useSearchFilter';
import SearchImg from '@/public/icons/Search.svg';

import { atom, useAtom } from 'jotai';
import Image from 'next/image';
import { useRef } from 'react';

export const searchValueAtom = atom('');

interface SearchBarProp {
  type: 'hashTag' | 'workOut';
}

function SearchBar({ type }: SearchBarProp) {
  const [searchValue, setSearchValue] = useAtom(searchValueAtom);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { searchHashTag } = useSearchFilter({
    timer,
    searchValue,
    setSearchValue,
  });

  return (
    <div className={styles.wrapper}>
      <Image className={styles.searchImg} src={SearchImg} alt="돋보기 아이콘" />
      {type === 'hashTag' ? (
        <input
          className={styles.input}
          onChange={searchHashTag}
          placeholder="#해시태그 검색"
        />
      ) : (
        <input
          className={styles.input}
          onChange={() => {}}
          placeholder="운동 부위, 기구 등 검색..."
        />
      )}
    </div>
  );
}

export default SearchBar;
