import FloatingButton from '@/components/atoms/Button/FloatingButton';
import ToggleItems from '@/components/atoms/Button/ToggleMenu/ToggleItems';
import Loading from '@/components/atoms/Loading';
import BlankArticle from '@/components/molecules/BlankArticle';
import PostArticle from '@/components/molecules/PostArticle';
import StoryArticle from '@/components/molecules/StoryArticle';
import MainHeader from '@/components/organisms/Header/MainHeader';
import styles from '@/components/organisms/MainSection/MainSection.module.scss';
import Modal from '@/components/organisms/Modal';
import { stories } from '@/constants/MockData';
import useMainSection from '@/hooks/useMainSection';
import useModalInfo from '@/hooks/useModalInfo';
import useToggleMenu from '@/hooks/useToggleMenu';
import MainBackgroundImg from '@/public/images/MainBackground.webp';

import Image from 'next/image';

function MainSection() {
  const { data, isLoading, ref } = useMainSection();
  const { isShow, closeModal } = useModalInfo();
  const { isOpen } = useToggleMenu();
  
  if (isLoading) return <Loading />;

  return (
    <>
      <main className={styles.wrapper}>
        <MainHeader />
        <Image
          className={styles.storyBackground}
          width={402}
          height={260}
          sizes="auto"
          priority={true}
          src={MainBackgroundImg}
          alt="배경 이미지"
        />
        <StoryArticle stories={stories} />
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
        </div>
        <div ref={ref} />
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
