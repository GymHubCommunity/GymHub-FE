import { getPostProps } from '@/apis/Query/Post/useGetPostwithScroll';
import Story from '@/components/atoms/Story';
import styles from '@/components/molecules/StoryArticle/StoryArticle.module.scss';

function StoryArticle({ posts }: getPostProps) {
  return (
    <div className={styles.wrapper}>
      <Story posts={posts} />
    </div>
  );
}

export default StoryArticle;
