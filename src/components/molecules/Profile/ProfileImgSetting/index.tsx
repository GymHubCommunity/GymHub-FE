import styles from '@/components/molecules/Profile/ProfileImgSetting/ProfileImgSetting.module.scss';
import CameraSvg from '@/assets/icons/CameraSvg';
import ProfileImgSvg from '@/assets/icons/ProfileImgSvg';

function ProfileImgSetting() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.profileImg}>
        <ProfileImgSvg />
      </div>
      <div className={styles.cameraImg}>
        <label htmlFor="profileImage">
          <input
            id="profileImage"
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            className={styles.cameraInput}
          />
          <CameraSvg />
        </label>
      </div>
    </div>
  );
}

export default ProfileImgSetting;
