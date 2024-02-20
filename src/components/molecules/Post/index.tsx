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
  return (
    <div className={styles.wrapper}>
      <div className={styles.postWrapper}>
        {/* TODO: 이미지 클릭시 이동하도록 수정 필요 (임시) */}
        <Link href={`/post/${postId}`}>
          <Text post="description">{content}</Text>
        </Link>
        {imageUrl?.length !== 0 ?? <PostImgSection imgUrl={imageUrl} />}
      </div>
    </div>
  );
}

export default Post;
