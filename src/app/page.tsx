'use client';

import MainSection from '@/components/organisms/MainSection';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function Home() {
  const router = useRouter();
  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    if (!accessToken) {
      router.push('/signin');
    }
  }, []);

  if (!accessToken) return;

  return (
    <>
      <MainSection />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
