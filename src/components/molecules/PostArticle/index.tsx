import PostProfile from '@/components/molecules/PostProfile';

import Post from '@/components/molecules/Post';
import { commentCountAtom } from '@/hooks/atoms';
import { WriterInfoProps } from '@/types/GetPost';
import { useAtomValue } from 'jotai';
import { usePathname } from 'next/navigation';

interface PostArticleProps {
  postId: number;
  userInfo: WriterInfoProps;
  content: string;
  imageUrl: string | Array<string> | null;
}

function PostArticle({
  postId,
  userInfo,
  content,
  imageUrl,
}: PostArticleProps) {
  const commentCount = useAtomValue(commentCountAtom);
  const pathName = usePathname();

  return (
    <>
      <PostProfile type={'default'} postProfile={userInfo} />
      <Post postId={postId} content={content} imageUrl={imageUrl} />
      {/* <Reaction /> */}
      {/* {pathName !== '/' && (
        <Text post="commentCount">댓글 {commentCount}개</Text>
      )} */}
      {/* <Comment comment={comment} /> */}
    </>
  );
}

export default PostArticle;
