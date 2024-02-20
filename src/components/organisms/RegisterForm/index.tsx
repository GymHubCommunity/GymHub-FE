import styles from '@/components/organisms/RegisterForm/RegisterForm.module.scss';
import ProfileImgSetting from '@/components/molecules/Profile/ProfileImgSetting';
import Text from '@/components/atoms/Text';
import { useFormContext } from 'react-hook-form';
import { UserInputRegisterProps } from '@/types/user';
import ConfirmButton from '@/components/atoms/Button/ConfirmButton';
import { useState } from 'react';

interface RegisterFormProp {
  onSubmit: () => void;
}

//TODO: 디자인 입히기
function RegisterForm({ onSubmit }: RegisterFormProp) {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserInputRegisterProps>();

  const [disabled, setDisabled] = useState(true);

  return (
    <div className={styles.wrapper}>
      <Text onBoarding="registerExplain">프로필을 설정해주세요.</Text>
      <ProfileImgSetting {...register('profileUrl')} />

      <div className={styles.nicknameWrapper}>
        <input placeholder="닉네임" {...register('nickname')} />
      </div>

      <h1>{errors.nickname?.message}</h1>

      <button type="submit" onClick={onSubmit}>
        완료
      </button>
      {/* <ConfirmButton title="완료" type="submit" /> */}
    </div>
  );
}

export default RegisterForm;
