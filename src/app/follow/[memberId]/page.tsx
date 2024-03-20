'use client';

import useMemberIdGetInfo from '@/apis/user/useMemberIdInfo';
import Loading from '@/components/atoms/Loading';
import FollowSection from '@/components/organisms/FollowSection';
import { MemberIdParams } from '@/types/user';

function FollowPage({ params }: MemberIdParams) {
  const { memberId } = params;

  const { data, isLoading } = useMemberIdGetInfo({ memberId });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <FollowSection
      nickName={data?.data.nickname as string}
      memberId={data?.data.id as number}
    />
  );
}

export default FollowPage;
