import styles from '@/components/atoms/PostImg/PostImg.module.scss';
import { ImgProps } from '@/types/Image';
import Image from 'next/image';

function PostImgSection({ imgUrl }: ImgProps) {
  return (
    <Image
      role="presentation"
      className={styles.postImg}
      width={385}
      height={287}
      src={imgUrl as string}
      alt="포스트 이미지"
    />
  );
}

export default PostImgSection;
