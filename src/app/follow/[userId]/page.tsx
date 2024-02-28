'use client';

import { instance } from '@/apis';
import Loading from '@/components/atoms/Loading';
import FollowSection from '@/components/organisms/FollowSection';
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
    <FollowSection nickName={data?.data.nickname} memberId={data?.data.id} />
  );
}

export default FollowPage;
