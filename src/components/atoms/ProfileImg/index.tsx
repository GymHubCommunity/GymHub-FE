import styles from '@/components/atoms/ProfileImg/ProfileImg.module.scss';
import { ImgProps } from '@/types/image';
import Image from 'next/image';

function ProfileImg({ imgUrl, size = 80 }: ImgProps) {
  return (
    <Image
      className={styles.profileImg}
      width={size}
      height={size}
      src={imgUrl}
      alt="프로필 이미지"
    />
  );
}

export default ProfileImg;
