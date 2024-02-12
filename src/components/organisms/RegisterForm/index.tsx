import styles from '@/components/organisms/RegisterForm/RegisterForm.module.scss';
import ProfileImgSetting from '@/components/molecules/Profile/ProfileImgSetting';
import Text from '@/components/atoms/Text';

function RegisterForm() {
  return (
    <div className={styles.wrapper}>
      <Text onBoarding="registerExplain">프로필을 설정해주세요.</Text>
      <div>
        <ProfileImgSetting />
      </div>

      <div className={styles.nicknameWrapper}>
        <input placeholder="닉네임" required />
      </div>

      <button>완료</button>
    </div>
  );
}

export default RegisterForm;
