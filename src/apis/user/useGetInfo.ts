import { instance } from '@/apis/index';
import { UserInfoProps } from '@/types/user';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

function useGetInfo() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['userInfoe'],
    queryFn: async () => {
      const response = await instance.get(`/members/me`);

      return response;
    },
  });

  if (isError) toast.error('회원정보를 가져오지 못했습니다.');

  return { data, isLoading };
}

export default useGetInfo;
