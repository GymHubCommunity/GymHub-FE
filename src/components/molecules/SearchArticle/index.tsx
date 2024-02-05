import PostContent from '@/components/atoms/PostContent';
import SearchBar, { filterValueAtom } from '@/components/atoms/SearchBar';
import styles from '@/components/molecules/SearchArticle/SearchArticle.module.scss';

import { useAtomValue } from 'jotai';

function SearchArticle() {
  const filterValue = useAtomValue(filterValueAtom);
  return (
    <div className={styles.wrapper}>
      <SearchBar />
      <PostContent type="search" searchCount={filterValue.length} />
    </div>
  );
}

export default SearchArticle;
