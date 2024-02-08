'use client';
import { useRouter } from 'next/navigation';

//TODO: 디자인 입히기
function BackButton() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()}>
      뒤로가기
    </button>
  );
}

export default BackButton;
