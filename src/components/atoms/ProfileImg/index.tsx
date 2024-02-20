import styles from '@/components/atoms/ProfileImg/ProfileImg.module.scss';
import { ImgProps } from '@/types/image';
import classNames from 'classnames/bind';
import Image from 'next/image';

const cn = classNames.bind(styles);

function ProfileImg({ imgUrl, size = 80, type }: ImgProps) {
  return (
    <Image
      className={cn('profileImg', type)}
      width={size}
      height={size}
      src={imgUrl as string}
      alt="프로필 이미지"
    />
  );
}
export default ProfileImg;
