import styles from '@/components/atoms/PostImg/PostImg.module.scss';
import { ImgProps } from '@/types/image';
import Image from 'next/image';

function PostImgSection({ imgUrl }: ImgProps) {
  if (imgUrl === null || imgUrl.length === 0) return;

  return (
    <Image
      role="presentation"
      className={styles.postImg}
      width={385}
      height={287}
      sizes="auto"
      priority
      src={typeof imgUrl === 'string' ? imgUrl : imgUrl[0]}
      alt="포스트 이미지"
    />
  );
}

export default PostImgSection;
