import FloatingButton from '@/components/atoms/Button/FloatingButton';
import PostArticle from '@/components/molecules/PostArticle';
import StoryArticle from '@/components/molecules/StoryArticle';
import MainHeader from '@/components/organisms/Header/MainHeader';
import styles from '@/components/organisms/MainSection/MainSection.module.scss';
import { stories } from '@/constants/MockData';
import useMainSection from '@/hooks/useMainSection';
import MainBackgroundImg from '@/public/images/MainBackground.png';
import Image from 'next/image';

function MainSection() {
  const { data, ref } = useMainSection();
  return (
    <>
      <main className={styles.wrapper}>
        <MainHeader />
        <Image
          className={styles.storyBackground}
          width={402}
          height={260}
          src={MainBackgroundImg}
          alt="배경 이미지"
        />
        <StoryArticle stories={stories} />
        <div className={styles.feedWrapper}>
          {data?.pages.map((val) => (
            <div key={val.postId} className={styles.inWrapper}>
              <PostArticle
                postId={val.postId}
                userInfo={val.writerInfo}
                content={val.content}
                imageUrl={val.imageUrl as string}
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
      <div className={styles.floatingButton}>
        <FloatingButton type={'post'} />
      </div>
    </>
  );
}

export default MainSection;
