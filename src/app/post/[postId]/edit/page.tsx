'use client';
import useGetPostDetail from '@/apis/Query/useGetPostDetail';
import AddPost from '@/components/organisms/AddPost';

function EditPostPage({ params }: { params: { postId: string } }) {
  const { data } = useGetPostDetail({ Id: params.postId });
  return (
    <>
      {data && (
        <AddPost
          imageUrls={data.imageUrls}
          hashtags={data.hashtags}
          content={data.content}
          work="update"
          postId={params.postId}
        />
      )}
    </>
  );
}

export default EditPostPage;
