import PostProfile from '@/components/molecules/PostProfile';

import Post from '@/components/molecules/Post';
import { comment } from '@/constants/MockData';
import { WriterInfoProps } from '@/types/GetPost';
import { usePathname } from 'next/navigation';
import Comment from '../Comment';
import Reaction from '../Reaction';

interface PostArticleProps {
  postId: number;
  userInfo: WriterInfoProps;
  content: string;
  imageUrl: string | Array<string> | null;
  registeredAt: string;
}

function PostArticle({
  postId,
  userInfo,
  content,
  imageUrl,
  registeredAt,
}: PostArticleProps) {
  // const commentCount = useAtomValue(commentCountAtom);
  const pathName = usePathname();

  return (
    <>
      <PostProfile type={'default'} postProfile={userInfo} />
      <Post postId={postId} content={content} imageUrl={imageUrl} />
      <Reaction registeredAt={registeredAt} />
      {/* {pathName !== '/' && (
        <Text post="commentCount">댓글 {commentCount}개</Text>
      )} */}
      <div />
      {pathName === '/' ? (
        <Comment
          id={comment[0].id}
          imgUrl={comment[0].imgUrl}
          userName={comment[0].userName}
          date={comment[0].date}
          comment={comment[0].comment}
        />
      ) : (
        comment.map((val) => (
          <Comment
            key={val.id}
            id={val.id}
            imgUrl={val.imgUrl}
            userName={val.userName}
            date={val.date}
            comment={val.comment}
          />
        ))
      )}
    </>
  );
}

export default PostArticle;
