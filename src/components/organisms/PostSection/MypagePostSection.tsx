import useGetPost from '@/apis/Query/Post/useGetPost';
import PostArticle from '@/components/molecules/PostArticle';
import Profile from '@/components/molecules/Profile';
import BackButtonHeader from '@/components/organisms/Header/BackButtonHeader';
import Modal from '@/components/organisms/Modal';
import styles from '@/components/organisms/PostSection/PostSection.module.scss';
import useModalInfo from '@/hooks/useModalInfo';
import { GetPostDetailProps } from '@/types/GetPost';
import { UserInfoProps } from '@/types/user';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface PostSectionProp {
  memberId: number;
  postData: GetPostDetailProps[];
  userData: AxiosResponse<UserInfoProps, any>;
  memberData: AxiosResponse<UserInfoProps, any>;
  pendingData: any;
}

function MypagePostSection({
  memberId,
  postData,
  userData,
  memberData,
  pendingData,
}: PostSectionProp) {
  const [ref, inView] = useInView();
  const { fetchNextPage, hasNextPage } = useGetPost({ memberId });
  const { isShow, closeModal } = useModalInfo();
  const [isPending, setIsPending] = useState(false);

  // [멤버 아이디]로 해당 멤버인지 다른 사람인지 구분
  const userId = memberData.data.id;
  const isUser = userId === memberId;

  const exerciseDays = postData?.filter((val) =>
    val.content.includes('#오운완'),
  );

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  useEffect(() => {
    if (pendingData.pages?.length > 0) {
      setIsPending(true);
    }
    if (pendingData.pages?.length <= 0) {
      setIsPending(false);
    }
  }, [pendingData.pages?.length]);

  return (
    <div className={styles.wrapper}>
      {isShow && (
        <Modal type={'commentDel'} isShow={isShow} closeModal={closeModal} />
      )}
      <BackButtonHeader
        pageName={userData.data.nickname}
        isUser={isUser}
        isPending={isPending}
      />
      <Profile
        profileImg={userData.data.profileUrl}
        postCount={postData.length ?? 0}
        exerciseDays={exerciseDays.length ?? 0}
        memberId={memberId}
        userId={userId}
        isUser={isUser}
      />
      {postData.length === 0 && <div className={styles.blankWrapper} />}
      <div className={styles.inWrapper}>
        {postData.map((item: GetPostDetailProps) => (
          <div key={item.postId} className={styles.postWrapper}>
            <PostArticle
              postId={item.postId}
              userInfo={item.writerInfo}
              content={item.content}
              imageUrl={item.imageUrl as string | string[] | null}
              registeredAt={item.registeredAt}
              commentCount={item.commentCount}
            />
          </div>
        ))}
        <div ref={ref} />
      </div>
    </div>
  );
}

export default MypagePostSection;
