import styles from '@/components/atoms/ProfileImg/ProfileImg.module.scss';
import { ImgProp } from '@/types/image';
import classNames from 'classnames/bind';
import Image from 'next/image';

const cn = classNames.bind(styles);

function ProfileImg({ imgUrl, size = 80 }: ImgProp) {
  return (
    <Image
      className={cn('profileImg')}
      width={size}
      height={size}
      src={imgUrl}
      alt="프로필 이미지"
    />
  );
}

export default ProfileImg;
