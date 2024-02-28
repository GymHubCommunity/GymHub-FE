'use client';

import { postRegister } from '@/apis/user/register';
import RegisterForm from '@/components/organisms/RegisterForm';
import { userFormSchema } from '@/constants/userSchema';
import useImageUpload from '@/hooks/useImageUpload';
import useIsMounted from '@/hooks/useIsMounted';
import { UserInputRegisterProps } from '@/types/user';
import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

function Register() {
  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(userFormSchema),
  });

  const { handleSubmit } = methods;
  const isMounted = useIsMounted();
  const router = useRouter();
  const [image, setImage] = useState('');
  const { handleUploadImageToS3 } = useImageUpload();

  const onSubmit = async (data: UserInputRegisterProps) => {
    const imageUrl = await handleUploadImageToS3();
    if (imageUrl) {
      data.profileUrl = imageUrl;
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

  return (
    <>
      {isMounted && (
        <FormProvider {...methods}>
          <RegisterForm
            onSubmit={handleSubmit(onSubmit)}
            onImageChange={handleImageChange}
          />
          <DevTool control={methods.control} />
        </FormProvider>
      )}
    </>
  );
}

export default Register;
