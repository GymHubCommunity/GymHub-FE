import PostImgSection from '@/components/atoms/PostImg';
import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/Post/Post.module.scss';

export interface PostProps {
  post: {
    postContent: string;
    imgUrl?: string;
  };
}

function Post({ post }: PostProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.postWrapper}>
        <Text post="description">{post.postContent}</Text>
        {post.imgUrl && <PostImgSection imgUrl={post.imgUrl} />}
      </div>
    </div>
  );
}

export default Post;
