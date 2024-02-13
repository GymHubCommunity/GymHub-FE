import Text from '@/components/atoms/Text';
import { commentCountAtom } from '@/components/organisms/MainSection';
import { comment, post, postProfile } from '@/constants/MockData';
import { useAtomValue } from 'jotai';
import { usePathname } from 'next/navigation';
import Comment from '../Comment';
import Post from '../Post';
import PostProfile from '../PostProfile';
import Reaction from '../Reaction';

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
