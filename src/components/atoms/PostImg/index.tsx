import styles from '@/components/atoms/PostImg/PostImg.module.scss';
import { ImgProps } from '@/types/image';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// TODO: 게시글 id 가져오기 (임시 데이터)
const id = 32;

function PostImgSection({ imgUrl }: ImgProps) {
  const router = useRouter();
  return (
    <Image
      role="presentation"
      onClick={() => router.push(`/post/${id}`)}
      className={styles.postImg}
      width={385}
      height={287}
      src={imgUrl as string}
      alt="포스트 이미지"
    />
  );
}

export default PostImgSection;
