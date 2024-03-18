import ConfirmButton from '@/components/atoms/Button/ConfirmButton';
import Text from '@/components/atoms/Text';
import ProfileImgSetting from '@/components/molecules/Profile/ProfileImgSetting';
import styles from '@/components/organisms/RegisterForm/RegisterForm.module.scss';
import { UserInputRegisterProps } from '@/types/user';
import { useFormContext } from 'react-hook-form';

interface RegisterFormProps {
  onSubmit: any;
  onImageChange: (image: string) => void;
  nickname?: string;
  profileUrl?: string;
}

function RegisterForm({
  onSubmit,
  onImageChange,
  nickname,
  profileUrl,
}: RegisterFormProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserInputRegisterProps>();

  return (
    <div className={styles.wrapper}>
      <Text onBoarding="registerExplain">프로필을 설정해주세요.</Text>
      <ProfileImgSetting
        userImg={profileUrl}
        onImageChange={onImageChange}
        {...register('profileUrl', { value: profileUrl ?? '' })}
      />
      <div className={styles.nicknameWrapper}>
        <input
          placeholder="닉네임"
          {...register('nickname', {
            value: nickname ?? '',
          })}
        />
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
