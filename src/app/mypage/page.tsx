'use client';

import useGetPost from '@/apis/Query/Post/useGetPost';
import useGetInfo from '@/apis/user/useGetInfo';
import { userIdAtom } from '@/components/molecules/PostProfile';
import Footer from '@/components/organisms/Footer';
import MypagePostSection from '@/components/organisms/PostSection/MypagePostSection';
import { useAtomValue } from 'jotai';

function MyPage() {
  const { data: postInfo } = useGetPost();
  const { data: userInfo } = useGetInfo();

  const userId = useAtomValue(userIdAtom);

  if (!postInfo || !userInfo) return;

  const data = postInfo.posts?.filter(
    (val) => val.writerInfo.writerId === userInfo.data.id,
  );

  return (
    <>
      <MypagePostSection postData={data ?? []} userData={userInfo} />
      <Footer />
    </>
  );
}

export default MyPage;
