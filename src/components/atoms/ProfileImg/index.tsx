import styles from '@/components/atoms/ProfileImg/ProfileImg.module.scss';
import classNames from 'classnames/bind';
import Image, { StaticImageData } from 'next/image';

const cn = classNames.bind(styles);

interface ProfileImg {
  imgUrl: StaticImageData;
}

function ProfileImg({ imgUrl }: ProfileImg) {
  return (
    <Image
      className={cn('profileImg')}
      width={80}
      height={80}
      src={imgUrl}
      alt="프로필 이미지"
    />
  );
}

export default ProfileImg;
