'use client';

import { putUserInfo } from '@/apis/user/register';
import RegisterForm from '@/components/organisms/RegisterForm';
import { userFormSchema } from '@/constants/userSchema';
import useImageUpload from '@/hooks/useImageUpload';
import {
  MemberIdParams,
  QueryUserInfoProps,
  UserInputRegisterProps,
} from '@/types/user';

import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

function EditProfile({ params }: MemberIdParams) {
  const { memberId } = params;
  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(userFormSchema),
  });

  const { handleSubmit } = methods;

  const router = useRouter();
  const [, setImage] = useState('');

  const { handleUploadImageToS3 } = useImageUpload();

  useEffect(() => {
    const preventClose = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };
    window.addEventListener('beforeunload', preventClose);

    return () => {
      window.removeEventListener('beforeunload', preventClose);
    };
  }, []);

  const queryClient = useQueryClient();
  const userInfo = queryClient.getQueryData<QueryUserInfoProps>([
    'userInfo',
    memberId,
  ]);

  if (!userInfo) {
    alert('잘못된 접근입니다.');
    return router.push(`/members/${memberId}`);
  }

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

  const { nickname, profileUrl } = userInfo.data;

  return (
    <FormProvider {...methods}>
      <RegisterForm
        nickname={nickname}
        profileUrl={profileUrl}
        onSubmit={handleSubmit(onSubmit)}
        onImageChange={handleImageChange}
      />
      <DevTool control={methods.control} />
    </FormProvider>
  );
}

export default EditProfile;
