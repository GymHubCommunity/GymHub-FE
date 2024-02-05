import PostContent from '@/components/atoms/PostContent';
import PostImgSection from '@/components/atoms/PostImgSection';
import styles from '@/components/molecules/Post/Post.module.scss';

interface PostProps {
  post: {
    postContent: string;
    imgUrl: string;
  };
}

function Post({ post }: PostProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.postWrapper}>
        <PostContent type="default" content={post.postContent} />
        <PostImgSection imgUrl={post.imgUrl} />
      </div>
    </div>
  );
}

export default Post;
