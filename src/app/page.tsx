'use client';

import ToggleItems from '@/components/atoms/Button/ToggleMenu/ToggleItems';
import Footer from '@/components/organisms/Footer';
import MainSection from '@/components/organisms/MainSection';
import useToggleMenu from '@/hooks/useToggleMenu';

function Home() {
  // const session = await getServerSession(authOptions);
  // const cookieStore = cookies();

  // const accessToken = cookieStore.get('accessToken');
  // const refreshToken = cookieStore.get('refresh')?.value;

  // if (refreshToken && !session) {
  //   console.log('로그인해라');
  // }
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
