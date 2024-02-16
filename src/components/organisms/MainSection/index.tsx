import FloatingButton from '@/components/atoms/Button/FloatingButton';
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
      <StoryArticle stories={stories} />
      <div className={styles.feedWrapper}>
        <div className={styles.inWrapper}>
          <PostArticle />
        </div>
        <div className={styles.inWrapper}>
          <RoutineArticle />
        </div>
      </div>
      <FloatingButton />
    </main>
  );
}

export default MainSection;
