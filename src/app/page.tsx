'use client';

import Footer from '@/components/organisms/Footer';
import MainSection from '@/components/organisms/MainSection';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function Home() {
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      router.push('/signin');
    }
  }, []);

  return (
    <>
      <MainSection />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
