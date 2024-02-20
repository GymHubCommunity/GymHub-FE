import PostImgSection from '@/components/atoms/PostImg';
import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/Post/Post.module.scss';
import Link from 'next/link';

export interface PostProps {
  postId: number;
  content: string;
  imageUrl: string | Array<string> | null;
}

function Post({ postId, content, imageUrl }: PostProps) {
  console.log(imageUrl?.length === 0);
  return (
    <div className={styles.wrapper}>
      <div className={styles.postWrapper}>
        <Link className={styles.contentWrapper} href={`/post/${postId}`}>
          <Text post="description">{content}</Text>
          {imageUrl && <PostImgSection imgUrl={imageUrl} />}
        </Link>
      </div>
    </div>
  );
}

export default Post;
