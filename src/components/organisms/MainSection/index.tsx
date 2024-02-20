import FloatingButton from '@/components/atoms/Button/FloatingButton';
import BlankArticle from '@/components/molecules/BlankArticle';
import BlankStory from '@/components/molecules/BlankStory';
import PostArticle from '@/components/molecules/PostArticle';
import RoutineArticle from '@/components/molecules/RoutineArticle';
import StoryArticle from '@/components/molecules/StoryArticle';
import MainHeader from '@/components/organisms/Header/MainHeader';
import styles from '@/components/organisms/MainSection/MainSection.module.scss';
import { comment, stories } from '@/constants/MockData';
import { commentCountAtom } from '@/hooks/atoms';
import HeaderImg from '@/public/images/HeaderImg.png';
import { useSetAtom } from 'jotai';
import Image from 'next/image';
import { useEffect } from 'react';

function MainSection() {
  const setCommentCount = useSetAtom(commentCountAtom);

  useEffect(() => {
    setCommentCount(comment.length);
  }, []);

  return (
    <main className={styles.wrapper}>
      <MainHeader />
      <Image
        className={styles.storyBackground}
        width={402}
        height={260}
        src={HeaderImg}
        alt="배경 이미지"
      />
      <div className={styles.storyWrapper}>
        {!stories ? <StoryArticle stories={stories} /> : <BlankStory />}
      </div>
      <div className={styles.feedWrapper}>
        {/* API 연동 후 게시글 여부에 따라 수정 */}
        <BlankArticle />
        <div className={styles.inWrapper}>
          <PostArticle />
        </div>
        <div className={styles.inWrapper}>
          <RoutineArticle />
        </div>
      </div>
      <FloatingButton type={'post'} />
    </main>
  );
}

export default MainSection;
