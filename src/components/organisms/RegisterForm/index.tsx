import styles from '@/components/organisms/RegisterForm/RegisterForm.module.scss';
import ProfileImgSetting from '@/components/molecules/Profile/ProfileImgSetting';
import Text from '@/components/atoms/Text';
import { useFormContext } from 'react-hook-form';
import { UserInputRegisterProps } from '@/types/user';
import ConfirmButton from '@/components/atoms/Button/ConfirmButton';
import { useState } from 'react';
import { postRegister } from '@/apis/user/register';
import { useRouter } from 'next/navigation';
import useImageUpload from '@/hooks/useImageUpload';

//TODO: 디자인 입히기
function RegisterForm(methods: any) {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserInputRegisterProps>();

  const router = useRouter();
  const { handleUploadImageToS3 } = useImageUpload();
  const [image, setImage] = useState('');

  const onSubmit = async (data: UserInputRegisterProps) => {
    if (image) {
      const imageUrl = await handleUploadImageToS3();
      if (imageUrl) {
        data.profileUrl = imageUrl;
      }
    }

    try {
      await postRegister(data);
      router.push('/');
    } catch (e) {
      throw Error('회원가입에 실패하였습니다');
    }
  };

  const handleImageChange = (image: string) => {
    setImage(image);
  };

  const [disabled, setDisabled] = useState(true);

  return (
    <form className={styles.wrapper} onSubmit={methods.handleSubmit(onSubmit)}>
      <Text onBoarding="registerExplain">프로필을 설정해주세요.</Text>
      <ProfileImgSetting
        onImageChange={handleImageChange}
        {...register('profileUrl')}
      />

      <div className={styles.nicknameWrapper}>
        <input placeholder="닉네임" {...register('nickname')} />
      </div>

      <h1>{errors.nickname?.message}</h1>

      <button type="submit">완료</button>
      {/* <ConfirmButton title="완료" type="submit" /> */}
    </form>
  );
}

export default RegisterForm;
