import PostArticle from '@/components/molecules/PostArticle';
import Profile from '@/components/molecules/Profile';
import BackButtonHeader from '@/components/organisms/Header/BackButtonHeader';
import Modal from '@/components/organisms/Modal';
import styles from '@/components/organisms/PostSection/PostSection.module.scss';
import useModalInfo from '@/hooks/useModalInfo';
import useToggleMenu from '@/hooks/useToggleMenu';
import { GetPostDetailProps } from '@/types/GetPost';
import { UserInfoProps } from '@/types/user';
import { AxiosResponse } from 'axios';

interface PostSectionProp {
  postData: GetPostDetailProps[];
  userData: AxiosResponse<UserInfoProps, any>;
}

function MypagePostSection({ postData, userData }: PostSectionProp) {
  const { isShow, closeModal } = useModalInfo();
  const { toggleMenu, closeMenu } = useToggleMenu();

  const exerciseDays = postData?.filter((val) =>
    val.content.includes('#오운완'),
  );

  return (
    <div className={styles.wrapper}>
      {isShow && (
        <Modal type={'commentDel'} isShow={isShow} closeModal={closeModal} />
      )}

      <BackButtonHeader pageName={userData.data.nickname} />
      <Profile
        profileImg={userData.data.profileUrl}
        postCount={postData.length ?? 0}
        exerciseDays={exerciseDays.length ?? 0}
        memberId={userData.data.id}
      />
      {postData.length === 0 && <div className={styles.blankWrapper}></div>}
      <div className={styles.inWrapper}>
        {postData.map((item: GetPostDetailProps, index: number) => (
          <div className={styles.postWrapper} key={index}>
            <PostArticle
              postId={item.postId}
              userInfo={item.writerInfo}
              content={item.content}
              imageUrl={item.imageUrl as string | string[] | null}
              registeredAt={item.registeredAt}
              commentCount={item.commentCount}
              close={closeMenu}
              toggle={toggleMenu}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MypagePostSection;
