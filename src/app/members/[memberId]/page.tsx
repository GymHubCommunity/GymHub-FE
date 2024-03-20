'use client';

import { useGetPending } from '@/apis/Query/Follow';
import useGetPost from '@/apis/Query/Post/useGetPost';
import useGetInfo from '@/apis/user/useGetInfo';
import useMemberIdGetInfo from '@/apis/user/useMemberIdInfo';
import Footer from '@/components/organisms/Footer';
import MypagePostSection from '@/components/organisms/PostSection/MypagePostSection';
import { MemberIdParams } from '@/types/user';

function MemberInfoPage({ params }: MemberIdParams) {
  const { memberId } = params;
  const { data: postInfo } = useGetPost({ memberId });
  const { data: memberInfo } = useGetInfo();
  const { data: userInfo } = useMemberIdGetInfo({ memberId });
  const { pending } = useGetPending();

  if (!postInfo || !memberInfo || !userInfo) return;

  return (
    <>
      <MypagePostSection
        memberId={Number(memberId)}
        postData={postInfo.pages}
        userData={userInfo}
        memberData={memberInfo}
        pendingData={pending ?? []}
      />
      <Footer />
    </>
  );
}

export default MemberInfoPage;
