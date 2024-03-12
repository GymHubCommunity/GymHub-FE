import { instance } from '@/apis';
import { useQuery } from '@tanstack/react-query';

function useGetRecords(year: string, month: string) {
  const { data, isLoading } = useQuery({
    queryKey: ['getRecords', year + month],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const response = await instance.get(
        `/records?year=${year}&month=${month}`,
      );
      return response.data;
    },
  });

  return { data, isLoading };
}

export default useGetRecords;
