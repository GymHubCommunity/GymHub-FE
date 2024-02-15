import SearchSvg from '@/assets/icons/SearchSvg';
import SearchButton from '@/components/atoms/Button/SearchButton';
import styles from '@/components/atoms/Input/SearchInput/SearchInput.module.scss';
import { searchValueAtom } from '@/hooks/atoms';
import useSearchFilter from '@/hooks/useSearchFilter';

import { useAtom } from 'jotai';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';

interface SearchInputProp {
  type: 'hashTag' | 'workOut';
}

function SearchInput({ type }: SearchInputProp) {
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

export default SearchInput;
