import Input from '@/components/atoms/Input';
import Text from '@/components/atoms/Text';
import Comment from '@/components/molecules/Comment';
import PostArticle from '@/components/molecules/PostArticle';
import Profile from '@/components/molecules/Profile';
import BackButtonHeader from '@/components/organisms/Header/BackButtonHeader';
import styles from '@/components/organisms/PostSection/PostSection.module.scss';
import { profile } from '@/constants/MockData';
import usePostSection from '@/hooks/usePostSection';
import { GetPostDetailProps } from '@/types/GetPost';

interface PostSectionProp {
  data: GetPostDetailProps;
  type: 'myPage' | 'postDetail';
}

function PostSection({ data, type }: PostSectionProp) {
  const postId = data.postId;

  const { comment, commentData, ref } = usePostSection({ postId });

  return (
    <div className={styles.wrapper}>
      {type === 'myPage' ? (
        <>
          <BackButtonHeader pageName={profile.name} />
          <Profile profile={profile} />
        </>
      ) : (
        <BackButtonHeader pageName={'게시글 상세 보기'} />
      )}

      <div className={styles.inWrapper}>
        <div className={styles.postWrapper}>
          <PostArticle
            postId={data.postId}
            userInfo={data.writerInfo}
            content={data.content}
            imageUrl={data.imageUrls as Array<string>}
            registeredAt={data.registeredAt}
            commentCount={data.commentCount}
          />
          <Text post="commentCount">댓글 {commentData?.commentCount}개</Text>
          <div className={styles.commentWrapper}>
            {comment?.pages.map((val) => (
              <Comment
                key={val.commentId}
                id={val.commentId}
                imgUrl={val.writerInfo.profileUrl}
                userName={val.writerInfo.nickname}
                date={val.registeredAt}
                comment={val.content}
              />
            ))}
            <div ref={ref} />
          </div>
          <Input type="comment" />
        </div>
        {/* TODO: 운동루틴 API 개발되면 수정 */}
        {/* <div className={styles.routineWrapper}>
          <RoutineArticle />
        </div> */}
      </div>
    </div>
  );
}

export default PostSection;
