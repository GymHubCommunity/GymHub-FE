'use client';

import { instance } from '@/apis';
import Loading from '@/components/atoms/Loading';
import FollowTwinButton from '@/components/molecules/FollowTwinButton';
import FollowSection from '@/components/organisms/FollowSection';
import BackButtonHeader from '@/components/organisms/Header/BackButtonHeader';
import { useQuery } from '@tanstack/react-query';

function FollowPage() {
  const { data, isLoading } = useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => {
      const response = await instance.get(`/members/me`);
      return response;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <BackButtonHeader pageName={data?.data.nickname} />
      <FollowTwinButton />
      <FollowSection memberId={data?.data.id} />
    </>
  );
}

export default FollowPage;
