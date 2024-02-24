'use client';

import useGetPostDetail from '@/apis/Query/Post/useGetPostDetail';
import PostSection from '@/components/organisms/PostSection';
import { GetPostDetailProps } from '@/types/GetPost';

function PostDetailPage() {
  const { data } = useGetPostDetail();
  if (!data) return;
  return <PostSection type={'postDetail'} data={data as GetPostDetailProps} />;
}

export default PostDetailPage;
