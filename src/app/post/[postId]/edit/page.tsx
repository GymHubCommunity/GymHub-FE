'use client';
import useGetPostDetail from '@/apis/Query/Post/useGetPostDetail';
import AddPost from '@/components/organisms/AddPost';

function EditPostPage({ params }: { params: { postId: string } }) {
  const { data } = useGetPostDetail({ id: params.postId });
  return (
    <>
      {data && (
        <AddPost
          imageUrls={data.imageUrls as string[]}
          hashtags={data.hashtags as string[]}
          content={data.content}
          work="update"
          postId={params.postId}
        />
      )}
    </>
  );
}

export default EditPostPage;
