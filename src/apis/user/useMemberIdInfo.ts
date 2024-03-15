import { UserInfoProps } from '@/types/user';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { instance } from '..';
import { memberIdProp } from '../Query/Follow';

function useMemberIdGetInfo({ memberId }: memberIdProp) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['userInfo', memberId],
    queryFn: async () =>
      await instance.get<UserInfoProps>(`/members/${memberId}`),
  });

  if (isError) toast.error('회원정보를 가져오지 못했습니다.');

  return { data, isLoading };
}

export default useMemberIdGetInfo;
