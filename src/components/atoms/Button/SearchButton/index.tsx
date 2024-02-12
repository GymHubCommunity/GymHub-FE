import HeaderSearchSvg from '@/assets/icons/HeaderSearchSvg';
import { useRouter } from 'next/navigation';

function SearchButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.push('/search')}>
      <HeaderSearchSvg />
    </button>
  );
}

export default SearchButton;
