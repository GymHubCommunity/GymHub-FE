'use client';

import useGetPostDetail from '@/apis/Query/useGetPostDetail';
import PostSection from '@/components/organisms/PostSection';
import { GetPostDetailProps } from '@/types/getPost';

function PostDetailPage() {
  const { data } = useGetPostDetail();

  return <PostSection type={'postDetail'} data={data as GetPostDetailProps} />;
}

export default PostDetailPage;
