import SearchSvg from '@/assets/icons/SearchSvg';
import styles from '@/components/atoms/SearchBar/SearchBar.module.scss';
import useSearchFilter from '@/hooks/useSearchFilter';

import { atom, useAtom } from 'jotai';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import SearchButton from '../Button/SearchButton';

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

  const pathName = usePathname();

  return (
    <div className={styles.wrapper}>
      <SearchSvg />
      {type === 'hashTag' ? (
        <>
          <input
            className={styles.input}
            onChange={searchHashTag}
            placeholder="해시태그 검색..."
            pattern="[^\s]+"
          />
          {pathName === '/search' && <SearchButton page="search" />}
        </>
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
