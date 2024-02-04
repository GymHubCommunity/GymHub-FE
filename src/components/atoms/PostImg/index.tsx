import styles from '@/components/atoms/PostImg/PostImg.module.scss';
import { ImgProp } from '@/types/image';
import Image from 'next/image';

function PostImg({ imgUrl }: ImgProp) {
  return (
    <Image
      className={styles.postImg}
      width={385}
      height={287}
      src={imgUrl}
      alt="포스트 이미지"
    />
  );
}

export default PostImg;
