import Post from '@/components/molecules/Post';
import PostProfile from '@/components/molecules/PostProfile';
import Reaction from '@/components/molecules/Reaction';
import { WriterInfoProps } from '@/types/GetPost';
import { useAtom, useAtomValue } from 'jotai';
import { usePathname } from 'next/navigation';

interface PostArticleProps {
  postId: number;
  userInfo: WriterInfoProps;
  content: string;
  imageUrl: string | Array<string> | null;
  commentCount: number;
  registeredAt: string;
}

function PostArticle({
  postId,
  userInfo,
  content,
  imageUrl,
  commentCount,
  registeredAt,
}: PostArticleProps) {
  return (
    <>
      <PostProfile type={'default'} postProfile={userInfo} postId={postId} />
      <Post postId={postId} content={content} imageUrl={imageUrl} />
      <Reaction
        postId={postId}
        commentCount={commentCount}
        registeredAt={registeredAt}
      />
    </>
  );
}

export default PostArticle;
