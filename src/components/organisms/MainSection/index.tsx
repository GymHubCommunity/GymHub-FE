import useGetInfo from '@/apis/user/useGetInfo';
import FloatingButton from '@/components/atoms/Button/FloatingButton';
import ToggleItems from '@/components/atoms/Button/ToggleMenu/ToggleItems';
import Loading from '@/components/atoms/Loading';
import BlankArticle from '@/components/molecules/BlankArticle';
import PostArticle from '@/components/molecules/PostArticle';
import StoryArticle from '@/components/molecules/StoryArticle';
import MainHeader from '@/components/organisms/Header/MainHeader';
import styles from '@/components/organisms/MainSection/MainSection.module.scss';
import Modal from '@/components/organisms/Modal';
import useMainSection from '@/hooks/useMainSection';
import useModalInfo from '@/hooks/useModalInfo';
import useToggleMenu from '@/hooks/useToggleMenu';
import MainBackgroundImg from '@/public/images/MainBackground.webp';

import Image from 'next/image';

function MainSection() {
  const { data, isLoading, ref } = useMainSection();
  const { data: userInfo } = useGetInfo();
  const { isShow, closeModal } = useModalInfo();
  const { isOpen } = useToggleMenu();

  if (isLoading) return <Loading />;

  const memberId = userInfo?.data.id;
  const posts = data?.pages.filter((val) => val.content.includes('#오운완'));

  return (
    <>
      <main className={styles.wrapper}>
        <MainHeader memberId={memberId as number} />
        <Image
          className={styles.storyBackground}
          width={402}
          height={260}
          sizes="auto"
          priority={true}
          src={MainBackgroundImg}
          alt="배경 이미지"
        />
        <StoryArticle posts={posts ?? []} />
        <div className={styles.feedWrapper}>
          {(data?.pages?.length as number) === 0 ? (
            <div className={styles.blankWrapper}>
              <BlankArticle />
            </div>
          ) : (
            ''
          )}
          {data?.pages.map((val) => (
            <div key={val.postId} className={styles.inWrapper}>
              <PostArticle
                postId={val.postId}
                userInfo={val.writerInfo}
                content={val.content}
                imageUrl={val.imageUrl as string}
                registeredAt={val.registeredAt}
                commentCount={val.commentCount}
              />
            </div>
          ))}

          {/* TODO: 루틴 API 연동시 데이터 연결 */}
          {/* <div className={styles.inWrapper}>
          <RoutineArticle />
        </div> */}
          <div ref={ref} />
        </div>
      </main>

      <div className={styles.modalWrapper}>
        {isOpen && <ToggleItems type="postReport" />}
      </div>
      {isShow && (
        <Modal type="postReport" isShow={isShow} closeModal={closeModal} />
      )}

      <div className={styles.floatingButton}>
        <FloatingButton type={'post'} />
      </div>
    </>
  );
}

export default MainSection;
