'use client';

import { putUserInfo } from '@/apis/user/register';
import RegisterForm from '@/components/organisms/RegisterForm';
import { userFormSchema } from '@/constants/userSchema';
import useImageUpload from '@/hooks/useImageUpload';
import { UserInputRegisterProps } from '@/types/user';
import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

function EditProfile() {
  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(userFormSchema),
  });

  const { handleSubmit } = methods;

  const router = useRouter();
  const [image, setImage] = useState('');

  const { handleUploadImageToS3 } = useImageUpload();

  const onSubmit = async (data: UserInputRegisterProps) => {
    const imageUrl = await handleUploadImageToS3();
    if (imageUrl) {
      data.profileUrl = imageUrl;
    }

    try {
      await putUserInfo(data).then(() => toast.success('프로필 수정 완료'));
      router.push('/');
    } catch (e) {
      toast.error('프로필 수정을 실패 했습니다.');
    }
  };

  const handleImageChange = (changeImg: string) => {
    setImage(changeImg);
  };

  return (
    <>
      <FormProvider {...methods}>
        <RegisterForm
          onSubmit={handleSubmit(onSubmit)}
          onImageChange={handleImageChange}
        />
        <DevTool control={methods.control} />
      </FormProvider>
    </>
  );
}

export default EditProfile;
