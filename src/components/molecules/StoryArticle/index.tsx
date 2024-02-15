import Story, { StoryProps } from '@/components/atoms/Story';
import styles from '@/components/molecules/StoryArticle/StoryArticle.module.scss';

function StoryArticle({ stories }: StoryProps) {
  return (
    <div className={styles.wrapper}>
      <Story stories={stories} />
    </div>
  );
}

export default StoryArticle;
