import Info from '@/components/atoms/CountInfo';
import ProfileImg from '@/components/atoms/ProfileImg';
import styles from '@/components/molecules/Profile/Profile.module.scss';
import { StaticImageData } from 'next/image';

interface ProfileProps {
  data: {
    imgUrl: StaticImageData;
    postCount: string;
    workOutCount: string;
    followCount: string;
    followingCount: string;
  };
}

function Profile({ data }: ProfileProps) {
  return (
    <div className={styles.wrapper}>
      <ProfileImg imgUrl={data.imgUrl} size={67} />
      <Info type="normal" content="게시글" count={data.postCount} />
      <Info type="normal" content="운동 일수" count={data.workOutCount} />
      <Info type="follow" content="팔로우" count={data.followCount} />
      <Info type="follow" content="팔로잉" count={data.followingCount} />
    </div>
  );
}

export default Profile;
