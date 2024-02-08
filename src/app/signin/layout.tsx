'use client';

import RegisterFormProvider from '@/providers/FormProvider/RegisterFormProvider';
import { ReactNode } from 'react';

import { userFormSchema } from '@/constants/userSchema';
import useIsMounted from '@/hooks/useIsMounted';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

//TODO: 회원정보 입력 레이아웃 구성 및 타입 주입
function RegisterLayout({ children }: { children: Readonly<ReactNode> }) {
  const methods = useForm({
    mode: 'onBlur',
    resolver: yupResolver(userFormSchema),
  });

  const isMounted = useIsMounted();

  const onSubmit = () => {
    return;
  };

  return (
    <>
      {isMounted && (
        <RegisterFormProvider>
          <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
        </RegisterFormProvider>
      )}
    </>
  );
}

export default RegisterLayout;
