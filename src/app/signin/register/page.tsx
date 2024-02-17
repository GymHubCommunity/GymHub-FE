'use client';

import { userFormSchema } from '@/constants/userSchema';
import useIsMounted from '@/hooks/useIsMounted';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { UserInputRegisterProps } from '@/types/user';
import RegisterForm from '@/components/organisms/RegisterForm';
import { DevTool } from '@hookform/devtools';
import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '@/constants/common';

//TODO: 이미지 업로드 기능 부착 및 api 수정
function Register() {
  const methods = useForm<UserInputRegisterProps>({
    mode: 'onChange',
    resolver: yupResolver(userFormSchema),
  });

  const { handleSubmit } = methods;
  const isMounted = useIsMounted();

  const onSubmit = async () => {
    await axios
      .post(
        `${BASE_URL}/members/register`,
        { nickname: 'nickname' },
        {
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            withCredentials: true,
          },
        },
      )
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {isMounted && (
        <FormProvider {...methods}>
          <RegisterForm onSubmit={handleSubmit(onSubmit)} />
          <DevTool control={methods.control} />
        </FormProvider>
      )}
    </>
  );
}

export default Register;
