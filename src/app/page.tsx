'use client';

import Footer from '@/components/organisms/Footer';
import MainSection from '@/components/organisms/MainSection';
import { useRouter } from 'next/navigation';

function Home() {
  const router = useRouter();
  if (!localStorage.getItem('accessToken')) {
    return router.push('/signin');
  }
  return (
    <>
      <MainSection />
      <Footer />
    </>
  );
}

export default Home;
