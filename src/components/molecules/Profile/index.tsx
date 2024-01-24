import Name from '@/components/atoms/Name';
import ProfileImg from '@/components/atoms/ProfileImg';
import WorkOutDays from '@/components/atoms/WorkOutDays';
import styles from '@/components/molecules/Profile/Profile.module.scss';
import Patrick from '@/public/images/뚱이.jpeg';

function Profile() {
  return (
    <div className={styles.wrapper}>
      <ProfileImg imgUrl={Patrick} />
      <div className={styles.inWrapper}>
        <Name name="뚱이" />
        <WorkOutDays date="200" />
      </div>
    </div>
  );
}

export default Profile;
