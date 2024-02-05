import Info from '@/components/atoms/CountInfo';
import ProfileImg from '@/components/atoms/ProfileImg';
import styles from '@/components/molecules/Profile/Profile.module.scss';
import { StaticImageData } from 'next/image';

interface ProfileProps {
  profile: {
    imgUrl: StaticImageData;
    postCount: string;
    workOutCount: string;
    followCount: string;
    followingCount: string;
  };
}

function Profile({ profile }: ProfileProps) {
  return (
    <div className={styles.wrapper}>
      <ProfileImg imgUrl={profile.imgUrl} size={67} />
      <Info type="default" content="게시글" count={profile.postCount} />
      <Info type="default" content="운동 일수" count={profile.workOutCount} />
      <Info type="follow" content="팔로우" count={profile.followCount} />
      <Info type="follow" content="팔로잉" count={profile.followingCount} />
    </div>
  );
}

export default Profile;
