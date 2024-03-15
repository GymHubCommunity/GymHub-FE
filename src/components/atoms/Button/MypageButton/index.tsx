import HeaderMyPageSvg from '@/assets/icons/HeaderMyPageSvg';
import { MainHeaderProp } from '@/components/organisms/Header/MainHeader';
import Link from 'next/link';

function MypageButton({ memberId }: MainHeaderProp) {
  return (
    <Link href={`/members/${memberId}`}>
      <HeaderMyPageSvg />
    </Link>
  );
}

export default MypageButton;
