import { usePathname } from 'next/navigation';

function useGetPostId() {
  const pathName = usePathname();
  const postId = pathName.slice(6);
  return { postId };
}

export default useGetPostId;
