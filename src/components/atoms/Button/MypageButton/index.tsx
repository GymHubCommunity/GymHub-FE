import HeaderMyPageSvg from '@/assets/icons/HeaderMyPageSvg';
import Link from 'next/link';

function MypageButton() {
  return (
    <Link href={'/mypage'}>
      <HeaderMyPageSvg />
    </Link>
  );
}

export default MypageButton;
