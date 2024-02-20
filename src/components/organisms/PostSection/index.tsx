import Input from '@/components/atoms/Input';
import PostArticle from '@/components/molecules/PostArticle';
import Profile from '@/components/molecules/Profile';
import BackButtonHeader from '@/components/organisms/Header/BackButtonHeader';
import styles from '@/components/organisms/PostSection/PostSection.module.scss';
import { profile } from '@/constants/MockData';
import { GetPostDetailProps } from '@/types/GetPost';

interface PostSectionProp {
  data: GetPostDetailProps;
  type: 'myPage' | 'postDetail';
}

function PostSection({ data, type }: PostSectionProp) {
  if (!data) return;
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
          />
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
