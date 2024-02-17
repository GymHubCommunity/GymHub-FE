'use client';

import ToggleItems from '@/components/atoms/Button/ToggleMenu/ToggleItems';
import Footer from '@/components/organisms/Footer';
import MainSection from '@/components/organisms/MainSection';
import useToggleMenu from '@/hooks/useToggleMenu';

function Home() {
  const { isOpen } = useToggleMenu();
  return (
    <>
      {isOpen && <ToggleItems type="post" />}
      <MainSection />
      <Footer />
    </>
  );
}

export default Home;
