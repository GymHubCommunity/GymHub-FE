import HeaderMyPageSvg from '@/assets/icons/HeaderMyPageSvg';
import { useRouter } from 'next/navigation';

function MypageButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.push('/mypage')}>
      <HeaderMyPageSvg />
    </button>
  );
}

export default MypageButton;
