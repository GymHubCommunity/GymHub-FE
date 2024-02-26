'use client';

import useGetPostDetail from '@/apis/Query/Post/useGetPostDetail';
import Loading from '@/components/atoms/Loading';
import PostSection from '@/components/organisms/PostSection';
import { GetPostDetailProps } from '@/types/GetPost';

function PostDetailPage() {
  const { data, isLoading } = useGetPostDetail();
  if (!data) return;

  if (isLoading) {
    return <Loading />;
  }

  return <PostSection type={'postDetail'} data={data as GetPostDetailProps} />;
}

export default PostDetailPage;
