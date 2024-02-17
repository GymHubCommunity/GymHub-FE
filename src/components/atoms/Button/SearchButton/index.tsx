import HeaderSearchSvg from '@/assets/icons/HeaderSearchSvg';
import styles from '@/components/atoms/Button/SearchButton/SearchButton.module.scss';
import Link from 'next/link';

interface SearchButtonProp {
  page: 'main' | 'search';
}

function SearchButton({ page }: SearchButtonProp) {
  return (
    <>
      {page === 'main' && (
        <Link href={'/search'}>
          <HeaderSearchSvg />
        </Link>
      )}
      {page === 'search' && <button className={styles.button}>검색</button>}
    </>
  );
}

export default SearchButton;
