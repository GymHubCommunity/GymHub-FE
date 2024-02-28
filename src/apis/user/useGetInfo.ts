import { instance } from '@/apis/index';
import { UserInfoProps } from '@/types/user';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

function useGetInfo() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => await instance.get<UserInfoProps>(`/members/me`),
  });

  if (isError) toast.error('회원정보를 가져오지 못했습니다.');

  return { data, isLoading };
}

export default useGetInfo;
