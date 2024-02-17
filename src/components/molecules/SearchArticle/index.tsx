import Input from '@/components/atoms/Input';
import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/SearchArticle/SearchArticle.module.scss';
import { searchValueAtom } from '@/hooks/atoms';
import { filterValueAtom } from '@/hooks/useSearchFilter';

import { useAtomValue } from 'jotai';

function SearchArticle() {
  const searchValue = useAtomValue(searchValueAtom);
  const filterValue = useAtomValue(filterValueAtom);

  return (
    <div className={styles.wrapper}>
      <Input type="hashTag" />
      {filterValue.length !== 0 ? (
        <Text post="searched">
          #{searchValue} {filterValue.length}건 검색됨
        </Text>
      ) : (
        ' '
      )}
    </div>
  );
}

export default SearchArticle;
