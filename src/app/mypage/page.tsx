'use client';

import useGetPost from '@/apis/Query/Post/useGetPost';
import Footer from '@/components/organisms/Footer';
import MypagePostSection from '@/components/organisms/PostSection/MypagePostSection';

function MyPage() {
  const { data } = useGetPost();

  if (!data) return;

  return (
    <>
      <MypagePostSection postData={data} />
      <Footer />
    </>
  );
}

export default MyPage;
