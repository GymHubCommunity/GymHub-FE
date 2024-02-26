'use client';

import useGetPostDetail from '@/apis/Query/Post/useGetPostDetail';
import Loading from '@/components/atoms/Loading';
import PostSection from '@/components/organisms/PostSection';

function PostDetailPage() {
  const { data, isLoading } = useGetPostDetail({});
  
  if (!data) return;

  if (isLoading) {
    return <Loading />;
  }

  return <PostSection data={data} />;
}

export default PostDetailPage;
