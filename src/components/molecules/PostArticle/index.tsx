import Text from '@/components/atoms/Text';
import Comment from '@/components/molecules/Comment';
import Post from '@/components/molecules/Post';
import PostProfile from '@/components/molecules/PostProfile';
import Reaction from '@/components/molecules/Reaction';

import { comment, post, postProfile } from '@/constants/MockData';
import { commentCountAtom } from '@/hooks/atoms';
import { useAtomValue } from 'jotai';
import { usePathname } from 'next/navigation';

function PostArticle() {
  const commentCount = useAtomValue(commentCountAtom);
  const pathName = usePathname();
  return (
    <>
      <PostProfile type={'default'} postProfile={postProfile} />
      <Post post={post} />
      <Reaction />
      {pathName !== '/' && (
        <Text post="commentCount">댓글 {commentCount}개</Text>
      )}
      <Comment comment={comment} />
    </>
  );
}

export default PostArticle;
