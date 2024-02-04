import Content from '@/components/atoms/Content';
import PostImg from '@/components/atoms/PostImg';
import styles from '@/components/molecules/Post/Post.module.scss';
import { StaticImageData } from 'next/image';

interface PostProps {
  data: {
    postContent: string;
    imgUrl: StaticImageData;
  };
}

function Post({ data }: PostProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.postWrapper}>
        <Content type="default" content={data.postContent} />
        <PostImg imgUrl={data.imgUrl} />
      </div>
    </div>
  );
}

export default Post;
