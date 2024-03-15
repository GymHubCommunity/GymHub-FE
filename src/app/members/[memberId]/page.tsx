'use client';

import { useGetPending } from '@/apis/Query/Follow';
import useGetPost from '@/apis/Query/Post/useGetPost';
import useMemberIdGetInfo from '@/apis/user/useMemberIdInfo';
import Footer from '@/components/organisms/Footer';
import MypagePostSection from '@/components/organisms/PostSection/MypagePostSection';

interface MemberInfoPageProp {
  params: { memberId: string };
}

function MemberInfoPage({ params }: MemberInfoPageProp) {
  const { memberId } = params;
  const { data: postInfo } = useGetPost({ memberId });
  const { data: userInfo } = useMemberIdGetInfo({ memberId });
  const { pending } = useGetPending();

  if (!postInfo || !userInfo) return;

  return (
    <>
      <MypagePostSection
        memberId={memberId}
        postData={postInfo.pages}
        userData={userInfo}
        pendingData={pending ?? []}
      />
      <Footer />
    </>
  );
}

export default MemberInfoPage;
