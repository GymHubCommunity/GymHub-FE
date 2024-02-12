import ProfileButton from '@/components/atoms/Button/ProfileButton';
import Info from '@/components/atoms/CountInfo';
import ProfileImg from '@/components/atoms/ProfileImg';
import styles from '@/components/molecules/Profile/Profile.module.scss';

interface ProfileProps {
  profile: {
    imgUrl: string;
    postCount: string;
    exerciseDays: string;
    followCount: string;
    followingCount: string;
  };
}

function Profile({ profile }: ProfileProps) {
  return (
    <div className={styles.wrapper}>
      <ProfileImg imgUrl={profile.imgUrl} size={74} />
      <div className={styles.inWrapper}>
        <div className={styles.infoWrapper}>
          <Info type="default" content="게시글" count={profile.postCount} />
          <Info
            type="default"
            content="운동 일수"
            count={profile.exerciseDays}
          />
          <Info type="follow" content="팔로우" count={profile.followCount} />
          <Info type="follow" content="팔로잉" count={profile.followingCount} />
        </div>
        <ProfileButton type="profileUpdate" />
      </div>
    </div>
  );
}

export default Profile;
