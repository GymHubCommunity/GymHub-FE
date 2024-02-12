import FloatingButton from '@/components/atoms/Button/FloatingButton';
import Comment from '@/components/molecules/Comment';
import ExerciseRoutine from '@/components/molecules/ExerciseRoutine';
import Post from '@/components/molecules/Post';
import PostProfile from '@/components/molecules/PostProfile';
import Reaction from '@/components/molecules/Reaction';
import StoryArticle from '@/components/molecules/StoryArticle';
import MainHeader from '@/components/organisms/Header/MainHeader';
import styles from '@/components/organisms/MainSection/MainSection.module.scss';
import {
  comment,
  post,
  postProfile,
  postRoutine,
  stories,
} from '@/constants/MockData';
import TextureImg from '@/public/images/Textures.png';
import Image from 'next/image';

function MainSection() {
  return (
    <div className={styles.wrapper}>
      <MainHeader />
      <Image
        className={styles.storyBackground}
        width={402}
        height={260}
        src={TextureImg}
        alt="배경 이미지"
      />
      <StoryArticle stories={stories} />
      <div className={styles.feedWrapper}>
        <div className={styles.inWrapper}>
          <PostProfile type="default" postProfile={postProfile} />
          <Post post={post} />
          <Reaction />
          <Comment comment={comment} />
        </div>
        <div className={styles.inWrapper}>
          <PostProfile type="exercised" postProfile={postProfile} />
          <Post post={postRoutine} />
          <ExerciseRoutine />
          <Reaction />
        </div>
      </div>
      <FloatingButton />
    </div>
  );
}

export default MainSection;
