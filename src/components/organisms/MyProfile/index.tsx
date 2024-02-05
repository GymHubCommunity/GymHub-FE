import Title from '@/components/atoms/Title';
import Profile from '@/components/molecules/Profile';
import TwinButton from '@/components/molecules/TwinButton';
import styles from '@/components/organisms/MyProfile/MyProfile.module.scss';

function MyProfile() {
  return (
    <div className={styles.wrapper}>
      <Title content="GymHub" />
      <div className={styles.inWrapper}>
        <Profile />
        <TwinButton />
      </div>
    </div>
  );
}

export default MyProfile;
