import ConfirmButton from '@/components/atoms/Button/ConfirmButton';
import Text from '@/components/atoms/Text';
import ProfileImgSetting from '@/components/molecules/Profile/ProfileImgSetting';
import styles from '@/components/organisms/RegisterForm/RegisterForm.module.scss';
import { UserInputRegisterProps } from '@/types/user';
import { useFormContext } from 'react-hook-form';

function RegisterForm(
  { onSubmit }: any,
  onImageChange: (image: string) => void,
) {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserInputRegisterProps>();

  return (
    <div className={styles.wrapper}>
      <Text onBoarding="registerExplain">프로필을 설정해주세요.</Text>
      <ProfileImgSetting
        onImageChange={onImageChange}
        {...register('profileUrl')}
      />
      <div className={styles.nicknameWrapper}>
        <input placeholder="닉네임" {...register('nickname')} />
      </div>
      <span className={styles.errorMessage}>{errors.nickname?.message}</span>
      <ConfirmButton
        title="완료"
        disabled={false}
        type="submit"
        onClick={onSubmit}
      />
    </div>
  );
}

export default RegisterForm;
