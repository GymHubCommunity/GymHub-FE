'use client';
import BackSvg from '@/assets/icons/BackSvg';
import { useRouter } from 'next/navigation';

//TODO: 디자인 입히기
function BackButton() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()}>
      <BackSvg />
    </button>
  );
}

export default BackButton;
