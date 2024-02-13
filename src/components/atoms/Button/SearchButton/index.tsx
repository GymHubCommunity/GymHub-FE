import HeaderSearchSvg from '@/assets/icons/HeaderSearchSvg';
import Link from 'next/link';

function SearchButton() {
  return (
    <Link href={'/search'}>
      <HeaderSearchSvg />
    </Link>
  );
}

export default SearchButton;
