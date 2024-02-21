'use client';

import Footer from '@/components/organisms/Footer';
import PostSection from '@/components/organisms/PostSection';

function MyPage() {
  return (
    <>
      <PostSection type={'myPage'} data={undefined} />
      <Footer />
    </>
  );
}

export default MyPage;
