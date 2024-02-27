import Input from '@/components/atoms/Input';
import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/SearchArticle/SearchArticle.module.scss';
import { filterValueAtom } from '@/hooks/useSearchFilter';

import { atom, useAtomValue } from 'jotai';
import { usePathname } from 'next/navigation';

export const totalCountAtom = atom(0);
function SearchArticle() {
  const filterValue = useAtomValue(filterValueAtom);
  const totalCount = useAtomValue(totalCountAtom);
  const pathName = usePathname();
  return (
    <div className={styles.wrapper}>
      <Input type="hashTag" />
      {pathName !== '/alltabs' &&
      (filterValue.length !== 0 || totalCount > 0) ? (
        <Text post="searched">
          검색 결과 {totalCount ?? filterValue.length}건
        </Text>
      ) : (
        ' '
      )}
    </div>
  );
}

export default SearchArticle;
