'use client';

import ToggleItems from '@/components/atoms/Button/ToggleMenu/ToggleItems';
import MainSection from '@/components/organisms/MainSection';
import useToggleMenu from '@/hooks/useToggleMenu';

function Home() {
  const { isOpen } = useToggleMenu();
  return (
    <>
      {isOpen && <ToggleItems type="post" />}
      <MainSection />
    </>
  );
}

export default Home;
