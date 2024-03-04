'use client';

import { useGetPending } from '@/apis/Query/Follow';
import useGetPost from '@/apis/Query/Post/useGetPost';
import useGetInfo from '@/apis/user/useGetInfo';
import { userIdAtom } from '@/components/molecules/PostProfile';
import Footer from '@/components/organisms/Footer';
import MypagePostSection from '@/components/organisms/PostSection/MypagePostSection';
import { useAtomValue } from 'jotai';

function MyPage() {
  const { data: postInfo } = useGetPost();
  const { data: userInfo } = useGetInfo();
  const { pending } = useGetPending();

  const userId = useAtomValue(userIdAtom);

  if (!postInfo || !userInfo) return;

  const data = postInfo.posts?.filter(
    (val) => val.writerInfo.writerId === userInfo.data.id,
  );

  return (
    <>
      <MypagePostSection
        postData={data ?? []}
        userData={userInfo}
        pendingData={pending ?? []}
      />
      <Footer />
    </>
  );
}

export default MyPage;
