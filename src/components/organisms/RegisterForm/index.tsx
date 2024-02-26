import styles from '@/components/organisms/RegisterForm/RegisterForm.module.scss';
import ProfileImgSetting from '@/components/molecules/Profile/ProfileImgSetting';
import Text from '@/components/atoms/Text';
import { useFormContext } from 'react-hook-form';
import { UserInputRegisterProps } from '@/types/user';
import ConfirmButton from '@/components/atoms/Button/ConfirmButton';

function RegisterForm(
  { onSubmit }: any,
  handleImageChange: (image: string) => void,
) {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserInputRegisterProps>();

  return (
    <div className={styles.wrapper}>
      <Text onBoarding="registerExplain">프로필을 설정해주세요.</Text>
      <ProfileImgSetting
        onImageChange={handleImageChange}
        {...register('profileUrl')}
      />

      <div className={styles.nicknameWrapper}>
        <input placeholder="닉네임" {...register('nickname')} />
      </div>

      <span className={styles.errorMessage}>{errors.nickname?.message}</span>

      <ConfirmButton title="완료" type="submit" onClick={onSubmit} />
    </div>
  );
}

export default RegisterForm;
